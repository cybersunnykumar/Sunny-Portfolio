# Portfolio (Vite + React + TypeScript)

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```sh
npm install
npm run dev
```

Vite dev server will print the local URL in the terminal.

## Build

```sh
npm run build
npm run preview
```


## Replacing profile photo

- Place your new photo in `src/assets` and name it `profile-source.jpg` (or copy directly to `profile-photo.png`).
- To auto-generate a transparent PNG (requires `sharp`):

```sh
# install dependencies if needed
npm install

# run the script to create `src/assets/profile-photo.png` from `profile-source.jpg`
node scripts/make-transparent.mjs
```

After this, the site will use `src/assets/profile-photo.png` in the About section.
