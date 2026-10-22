# Local Key

Automotive locksmith website for Local Key in Elbridge, NY, serving Greater Syracuse. Built with Astro, TypeScript and Tailwind CSS. The English and Polish homepages share the same components and responsive image pipeline.

## Development

Requires Node.js 22.12 or newer.

```text
npm ci
npm run dev
```

## Checks and production build

```text
npm run ai:check
npm run build
npm run check:site
npm run preview
```

`ai:check` runs type checks, import checks and unit/component tests. `check:site` checks SEO, links and image markup against the built pages. The build generates favicons, the sharing image and responsive photo formats, then strips unused image and icon output.

## Content

- `src/data/i18n/nova.json`: English and Polish homepage, navigation and footer copy.
- `src/data/global/company.json`: contact details, business information and service areas.
- `src/data/global/appointments.json`: appointment dialog labels and messages.
- `src/content/legal/`: privacy and cookie pages in both languages.
- `public/assets/images/`: supplied photos and responsive WebP/AVIF versions.
- `design/nova.md`: design tokens; run `npm run design:sync` after editing.

See [BUSINESS-SETUP.md](BUSINESS-SETUP.md) for contact placeholders, photos, appointment texts and domain setup.

Appointment requests open the customer's texting app with a prepared message to the business phone number. The customer sends the message; the business confirms availability by reply.

The site retains the original Nova template's [license](LICENSE.md) and WebScale attribution. Asset sources are listed in [ASSETS-LICENSES.md](ASSETS-LICENSES.md).
