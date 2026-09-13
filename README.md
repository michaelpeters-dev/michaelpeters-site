# Personal site

Personal site for Michael C. Peters, built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

| Page       | File                        | Notes                                                   |
| ---------- | --------------------------- | ------------------------------------------------------- |
| `/`        | `src/app/page.tsx`          | Content lives in `src/content/profile.ts`               |
| `/CS2340`  | `src/app/CS2340/page.tsx`   | Unlisted (no links to it, `noindex`). Share it by link. |

## Run locally

```sh
npm install
npm run dev
```

Open <http://localhost:3000> and <http://localhost:3000/CS2340>.

## Update content

- **Homepage:** edit `src/content/profile.ts`.
- **CS 2340 projects:** edit `src/content/cs2340.ts`. Each project is one entry in the `projects` array. Give each project the links a grader needs (live site, source code, recording, report), in the order they should see them. A link without an `href` shows as "Not posted yet" until you fill it in; a project with no links at all is shown as upcoming.

## Check before publishing

```sh
npm run lint
npm run build
```

## Deploy

The site is set up for [Vercel](https://vercel.com), which is made by the Next.js team and is free for personal sites:

1. Push this folder to a GitHub repository.
2. On Vercel, choose **Add New → Project**, import the repository, and accept the defaults.
3. Every push to `main` deploys. Pull requests get their own preview URL.

Link previews (the card shown when a URL is pasted into Canvas, Slack, or iMessage) are generated at build time from `src/app/opengraph-image.tsx` and `src/app/CS2340/opengraph-image.tsx`.
