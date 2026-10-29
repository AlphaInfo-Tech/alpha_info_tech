-- Voice2Fill: payments from the Razorpay Payment Buttons
-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
-- Filled by the Razorpay webhook (src/app/api/razorpay/webhook/route.ts),
-- which writes with the service role key. Your team works through the rows
-- in Table Editor: renew the plan in Admin → Users → Plan, then set status.

-- 1. Table ------------------------------------------------------------------

create table if not exists public.voice2fill_payments (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),

  -- From Razorpay
  event_id         text not null,                 -- x-razorpay-event-id, for duplicate events
  payment_id       text not null,                 -- pay_…, the reference on the customer's receipt
  order_id         text,
  amount_paise     integer not null check (amount_paise > 0),
  currency         text not null default 'INR',
  method           text,                          -- upi, card, netbanking, wallet…
  plan_key         text check (plan_key in ('starter', 'basic', 'pro', 'business', 'topup')),
  voice2fill_phone text check (voice2fill_phone ~ '^[6-9][0-9]{9}$'),  -- the account to activate
  contact          text,                          -- phone entered in Razorpay checkout
  email            text,
  notes            jsonb not null default '{}'::jsonb,  -- the button's custom field values

  -- For your team
  status           text not null default 'pending_activation'
                   check (status in ('pending_activation', 'needs_check', 'activated', 'refunded')),
  activated_at     timestamptz,
  admin_note       text,

  constraint voice2fill_payments_event_key unique (event_id),
  constraint voice2fill_payments_payment_key unique (payment_id)
);

create index if not exists voice2fill_payments_status_created_idx
  on public.voice2fill_payments (status, created_at desc);

-- 2. Flag rows that can't be activated as they are, and stamp activation ----
-- needs_check: the amount didn't match a plan, or no Voice2Fill mobile number
-- was found. Check the notes and the receipt, then fix and activate by hand.

create or replace function public.voice2fill_payments_set_status()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' and (new.plan_key is null or new.voice2fill_phone is null) then
    new.status := 'needs_check';
  end if;
  if new.status = 'activated' and (tg_op = 'INSERT' or old.status is distinct from 'activated') then
    new.activated_at := coalesce(new.activated_at, now());
  end if;
  return new;
end;
$$;

drop trigger if exists voice2fill_payments_status on public.voice2fill_payments;
create trigger voice2fill_payments_status
  before insert or update on public.voice2fill_payments
  for each row execute function public.voice2fill_payments_set_status();

-- 3. Security: nobody but the server and the dashboard -----------------------
-- RLS on with no policies: the public anon key can't read or write a single
-- row, so nobody can add a fake payment. The service role (used only by the
-- webhook on the server) and the Supabase dashboard bypass RLS.

alter table public.voice2fill_payments enable row level security;

revoke all on table public.voice2fill_payments from anon, authenticated;
