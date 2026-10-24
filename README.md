# Alpha Info Tech — Company Website

Marketing website for Alpha Info Tech, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Landing page (hero, stats, about, services, business model teaser, CTA)
- `/our-model` — Detailed breakdown of the three-stage growth model and company values
- `/contact` — Contact form (logs submissions to a Google Sheet via a Google Apps Script webhook) + contact details
- `/privacy-policy` — Privacy policy
- `/terms` — Terms & conditions

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Node.js API route** (`/api/contact`) that forwards contact form submissions to a **Google Apps Script** webhook, which appends them to a Google Sheet
- **Zod** for server-side form validation
- **lucide-react** for icons

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the Apps Script URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without `GOOGLE_SHEET_SCRIPT_URL` configured, the site still runs — only the contact form's submission will fail (it returns a friendly error to the user).

## Environment Variables

See [.env.example](.env.example). Required for the contact form to actually log submissions:

| Variable | Description |
| --- | --- |
| `GOOGLE_SHEET_SCRIPT_URL` | Deployed Google Apps Script Web App URL (ends in `/exec`) |
| `SUPABASE_URL` | Supabase project URL, used by `/api/request-access` (Voice2Fill access requests) |
| `SUPABASE_ANON_KEY` | Supabase public anon key; RLS on `access_requests` should only allow inserts |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used in metadata/sitemap/robots |

### Setting up the Google Sheet + Apps Script

1. Create a new Google Sheet. Add a header row: `Timestamp | Name | Email | Phone | Message`.
2. In the sheet, go to **Extensions → Apps Script**.
3. Replace the default code with:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.submittedAt || new Date().toISOString(),
       data.name || "",
       data.email || "",
       data.phone || "",
       data.message || "",
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

4. Click **Deploy → New deployment**, select type **Web app**.
5. Set "Execute as" to **Me** and "Who has access" to **Anyone**.
6. Deploy, authorize the script when prompted, and copy the Web App URL (ends in `/exec`).
7. Set that URL as `GOOGLE_SHEET_SCRIPT_URL` in `.env.local` (and in your hosting provider's env vars for production).

Whenever you edit the script, you must create a **new deployment** (or manage versions) for changes to take effect on the existing URL.

## Editing Content

All company copy (services, stages, values, stats, contact details) lives in one place: [src/lib/content.ts](src/lib/content.ts). Update it there and every page picks up the change automatically.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo into [Vercel](https://vercel.com/new).
3. Add the environment variables above in the Vercel project settings.
4. Deploy — Vercel builds and hosts both the static pages and the `/api/contact` Node function automatically.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # start production server
npm run lint    # run ESLint
```
