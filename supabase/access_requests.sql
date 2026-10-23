-- Fill by Kural: access requests
-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
-- Stores submissions from the /request-access form (src/app/api/request-access/route.ts).

-- 1. Table ------------------------------------------------------------------

create table if not exists public.access_requests (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),

  -- Sent by the form
  full_name     text not null check (char_length(full_name) between 2 and 100),
  phone         text not null check (phone ~ '^[6-9][0-9]{9}$'),  -- 10-digit Indian mobile (WhatsApp), no +91
  email         text check (email is null or (char_length(email) <= 200 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  user_type     text not null check (user_type in ('service_centre', 'office', 'individual', 'other')),
  organisation  text check (char_length(organisation) <= 150),
  district      text check (char_length(district) <= 80),
  forms_per_day text check (forms_per_day in ('1-10', '11-50', '51+')),
  message       text check (char_length(message) <= 1000),
  ui_language   text not null default 'en' check (ui_language in ('en', 'ta')),
  consent       boolean not null check (consent),

  -- Filled in by your team when reviewing
  status        text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  reviewed_at   timestamptz,
  notes         text,

  -- One request per number. A second request returns HTTP 409,
  -- which the form shows as "We already have a request from this number".
  constraint access_requests_phone_key unique (phone)
);

create index if not exists access_requests_status_created_idx
  on public.access_requests (status, created_at desc);

-- 2. Stamp reviewed_at when the status changes ----------------------------

create or replace function public.access_requests_set_reviewed_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.status is distinct from old.status and new.status <> 'pending' then
    new.reviewed_at := coalesce(new.reviewed_at, now());
  end if;
  return new;
end;
$$;

drop trigger if exists access_requests_reviewed_at on public.access_requests;
create trigger access_requests_reviewed_at
  before update on public.access_requests
  for each row execute function public.access_requests_set_reviewed_at();

-- 3. Security: the public (anon) key may only INSERT ------------------------
-- No one using the anon key can read, change or delete requests. Your team
-- views them in the Supabase dashboard (Table Editor), which bypasses RLS.

alter table public.access_requests enable row level security;

revoke all on table public.access_requests from anon, authenticated;

-- Only the form's columns can be written; status/reviewed_at/notes cannot.
grant insert (
  full_name, phone, email, user_type, organisation,
  district, forms_per_day, message, ui_language, consent
) on table public.access_requests to anon;

drop policy if exists "Anyone can submit an access request" on public.access_requests;
create policy "Anyone can submit an access request"
  on public.access_requests
  for insert
  to anon
  with check (consent and status = 'pending');

-- 4. Retention: delete 180 days after review, or 180 days after submission
--    if never reviewed (matches the privacy policy). -----------------------
-- Needs the pg_cron extension: Dashboard → Database → Extensions → enable "pg_cron",
-- then run this block. Runs every day at 02:00 UTC.

create extension if not exists pg_cron;

select cron.schedule(
  'delete-old-access-requests',
  '0 2 * * *',
  $$delete from public.access_requests
    where coalesce(reviewed_at, created_at) < now() - interval '180 days'$$
);
