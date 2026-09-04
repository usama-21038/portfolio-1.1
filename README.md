# Usama Bin Hasan — Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio site.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where to edit things

- **Name, title, hero text** — `components/Hero.tsx`
- **About text** — `components/About.tsx`
- **Skills** — `data/projects.ts` (the `skillGroups` array)
- **Projects** — `data/projects.ts` (the `projects` array)
- **Contact links (email / GitHub / LinkedIn)** — `components/Contact.tsx`
  and `components/Hero.tsx` (social icons currently link to `#`,
  replace `href="#"` with your real profile URLs, and swap the
  placeholder email)
- **Colors** — `tailwind.config.ts` under `theme.extend.colors`
- **Fonts** — `app/layout.tsx` (Space Grotesk for headings, Inter for
  body text, JetBrains Mono for code-styled bits)

## Deploy

The easiest option is [Vercel](https://vercel.com/new) — push this to a
GitHub repo and import it there, or run `vercel` from this folder.

---

বাংলায় সংক্ষেপে: এই প্রজেক্টটা লোকাল কম্পিউটারে চালাতে প্রথমে
`npm install` তারপর `npm run dev` কমান্ড দিন। নাম, প্রজেক্ট, স্কিল, আর
কন্টাক্ট লিঙ্ক বদলাতে উপরের ফাইলগুলো এডিট করুন — `components/Contact.tsx`
আর `components/Hero.tsx` ফাইলে গিয়ে placeholder email আর GitHub/LinkedIn
লিঙ্কগুলো নিজেরটা দিয়ে বদলে দিন।
