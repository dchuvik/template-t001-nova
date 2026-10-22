# Local Key setup

Local Key is an automotive locksmith in Elbridge, NY, serving Greater Syracuse and Central New York. Both English and Polish versions are retained.

## Business details

Edit `src/data/global/company.json`. The current phone and appointment text recipient is `315-552-1553`. Email, street address, ZIP code and business hours still use visible placeholders. Placeholders do not become contact links or structured business data.

Homepage, navigation and footer copy live in `src/data/i18n/nova.json`. Update both language objects together. The seven active homepage sections are composed in `src/components/PageBuilder.astro`.

## Appointment requests

Schedule an appointment opens a form for the customer's contact details, vehicle, service, working-key status, preferred date/time, location and notes. Continuing opens their texting app with a prepared request to the phone in `company.json`. They review it and tap Send. The business confirms availability by reply.

The form does not submit to a website endpoint or save details in browser storage. A message preview and copy option support desktop visitors and devices without SMS support. Form copy lives in `src/data/global/appointments.json`.

## Photos

| Placement | Source file |
| --- | --- |
| Hero | `public/assets/images/hero.png` |
| Spare-key card | `public/assets/images/two-key-fobs.png` |
| Programming card | `public/assets/images/right-car-keys.png` |
| About the business | Built-in placeholder until a photo is provided |

PNG and JPEG photos in `public/assets/images/` generate responsive WebP and AVIF versions during `npm run assets:img` or `npm run build`. Use lowercase filenames with hyphens. Keep the original path in the content; `SmartImage` supplies the generated variants. Both key cards use a centered cover crop on mobile and desktop.

When replacing a photo, use a new filename and update its path and descriptive alternative text in both languages. The footer uses a plain dark background. There are no remaining template stock photos.

`public/icon.svg` is the source for favicon assets. `public/og-image.svg` is the source for the Local Key sharing card. `npm run assets:gen` regenerates them when their sources change.

## Public domain and indexing

Set `PUBLIC_SITE_URL` to the production domain before building. It controls canonical URLs, the sitemap and structured business data. Without a domain the site uses localhost and stays noindex. Deployment previews stay noindex.

```powershell
$env:PUBLIC_SITE_URL = 'https://your-real-domain.com/'
npm run build
```

Copy `.env.example` to `.env` to save local settings. `PUBLIC_BASE_PATH` is optional for hosting below a domain subdirectory.

## Validation

```text
npm run ai:check
npm run build
npm run check:site
```

The original template license and footer attribution are retained.
