# Alpha Info Tech — Company Website

Marketing website for Alpha Info Tech, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — Landing page (hero, stats, about, services, business model teaser, CTA)
- `/our-model` — Detailed breakdown of the three-stage growth model and company values
- `/contact` — Contact form (emails submissions via a Node/Nodemailer API route) + contact details
- `/privacy-policy` — Privacy policy
- `/terms` — Terms & conditions

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Node.js API route** (`/api/contact`) using **Nodemailer** to send contact form emails via SMTP
- **Zod** for server-side form validation
- **lucide-react** for icons

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in real SMTP credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without SMTP credentials configured, the site still runs — only the contact form's email send will fail (it returns a friendly error to the user).

## Environment Variables

See [.env.example](.env.example). Required for the contact form to actually send email:

| Variable | Description |
| --- | --- |
| `SMTP_HOST` | SMTP server host, e.g. `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port, e.g. `587` |
| `SMTP_USER` | SMTP username / from address |
| `SMTP_PASS` | SMTP password or app password |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used in metadata/sitemap/robots |

If using Gmail, generate an [App Password](https://myaccount.google.com/apppasswords) rather than using the account password directly.

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
