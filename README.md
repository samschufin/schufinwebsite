# SchuFin Website — schufin.com

The marketing site for Schu Financials. A single landing page listing services
and contact info, plus a working contact form.

**If you're reading this months later and forgot how any of it works, start here.**

---

## How updating the site works

```
This folder on your laptop
        |  git push
GitHub: github.com/samschufin/schufinwebsite  (branch: main)
        |  Netlify sees the push and rebuilds automatically
Netlify project "extraordinary-raindrop-5f5154"
        |
https://schufin.com   (live, ~1-2 minutes after you push)
```

You do **not** deploy by hand. Pushing to `main` on GitHub is what publishes the
site. There is no separate "upload" step.

### The five steps to make a change

Run these from this folder (`~/Desktop/Code/Coding_Projects/SchuFinWebsiteCode`):

```bash
git pull                      # 1. get the latest, in case you changed something elsewhere
npm run dev                   # 2. preview locally at http://localhost:3000
```

Edit the file you want (see the map below). The preview reloads as you save.
Press `Ctrl+C` in the terminal to stop the preview when you're done.

```bash
npm run build                 # 3. make sure it still compiles — if this fails, Netlify will fail too
git add -A
git commit -m "Describe what you changed"
git push                      # 4. this publishes it
```

Then 5: wait 1-2 minutes and check https://schufin.com. You can watch the build
at https://app.netlify.com.

**If you skip `npm run build` and something is broken, the deploy fails and the
site simply keeps showing the previous version.** Nothing breaks publicly — you
just won't see your change.

---

## Where to change what

All page content lives in `src/app/components/`. Each file is one section of the
page, stacked top to bottom in the order listed:

| To change this | Edit this file |
|---|---|
| Top navigation bar / menu links | `src/app/components/Navbar.tsx` |
| Big headline at the top of the page | `src/app/components/Hero.tsx` |
| Strategic services section | `src/app/components/Services.tsx` |
| Banner between the two service sections | `src/app/components/ServicesBanner.tsx` |
| Accounting services section | `src/app/components/AccountingServices.tsx` |
| Contact cards (email, phone, LinkedIn) and the contact form | `src/app/components/Contact.tsx` |
| The order sections appear in | `src/app/page.tsx` |
| Page title, fonts, site-wide settings | `src/app/layout.tsx` |
| Brand colors and fonts | `tailwind.config.ts` |
| Images and logos | `public/` |

The brand color used throughout is `#29ABE2` (SchuFin blue). Searching the code
for that value finds every place it's used.

### Files you can mostly ignore

`TrendLineAnimation.tsx`, `AnimatedElement.tsx`, `ScrollObserver.tsx`,
`SmoothScroll.tsx`, `ServiceCarousel.tsx`, `AccountingServiceCarousel.tsx`, and
everything in `src/app/lib/` are animation and scrolling machinery. You almost
never need to touch these to update text or contact details.

---

## The contact form

The form at the bottom of the page posts to `src/app/api/contact/route.ts`,
which sends the message through [Resend](https://resend.com) to
**sam@schufin.com**.

It needs an API key named `RESEND_API_KEY` in two separate places:

- **Locally:** in the `.env.local` file in this folder. This file is deliberately
  not in Git (it holds a secret), so it only exists on your laptop.
- **In production:** in the Netlify dashboard under
  *Site settings → Environment variables*.

If the contact form ever stops working, an expired or missing key in the Netlify
dashboard is the first thing to check.

---

## Inactive pages

`src/app/_dashboards/` is a sample-dashboards page that isn't finished. The
leading underscore tells Next.js to treat the folder as private, so it is **not
published** and there is no `schufin.com/dashboards` page.

To bring it back when it's ready: rename the folder from `_dashboards` to
`dashboards`, then push. To delete it for good: delete the folder.

---

## Built with

- **Next.js 14** (App Router) — the site framework
- **Tailwind CSS** — styling, written as class names directly in the components
- **TypeScript** — the `.tsx` files
- **Resend** — contact form email delivery
- **Netlify** — hosting and automatic deploys

Requires Node.js. Run `npm install` once if you ever clone this to a new machine.

---

## Leftovers from the original template

This project started from an off-the-shelf template, and a few unused files came
along with it. They are harmless and are not part of the built site, but they are
not yours and can be deleted any time:

- `paths/` — prompt docs for building an AI chat app; unrelated to this site
- `.replit` — config for the Replit editor, which isn't used here
- `.cursorrules` — config for the Cursor editor, only useful if you edit there
- `public/next.svg`, `public/vercel.svg` — default template logos, unreferenced
- `public/profile.jpg`, `public/logo.png`, `public/schufin-high-resolution-logo.png`
  — unreferenced images (the live site uses
  `Profile Sam Schuhler-modified.png` and `logo-no-for-dark-background.png`)
