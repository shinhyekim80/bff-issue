# GitHub Checklist

## Before First Push

- [ ] Decide whether the repository should be public or private.
- [ ] Decide whether to keep `screenshots/` in git. Recommended: keep it for prototype review.
- [ ] Do not commit `node_modules/`.
- [ ] Do not commit `dist/`.
- [ ] Do not commit `.DS_Store`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.

## Initialize Repository

```bash
git init
git add .
git commit -m "Initial BFF ISSUE prototype"
```

## Connect Remote

```bash
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git branch -M main
git push -u origin main
```

## Recommended Repository Description

```text
Y2K friendship magazine prototype: daily questions, friend pages, weekly curation, and monthly bookshelf.
```

## Suggested Topics

```text
react, typescript, vite, tailwindcss, prototype, mobile-web, y2k, social-app
```

## Deployment Notes

This project can be deployed as a static Vite app.

Common options:

- Vercel
- Netlify
- GitHub Pages

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Known Prototype Constraints

- No backend.
- No real auth.
- No persisted answers.
- No real upload flow.
- No production share integration.
- Fonts depend on external CDNs in `index.html`.
