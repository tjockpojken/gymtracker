# Lifts – Gym Tracker PWA

A minimal, installable gym tracker for Android (and any browser).

## Files
```
gym-tracker/
├── index.html      ← the whole app
├── manifest.json   ← makes it installable
├── sw.js           ← enables offline mode
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## How to deploy (free, 5 minutes)

### Option A — GitHub Pages (recommended)
1. Create a free account at github.com
2. Create a new repository (e.g. `gym-tracker`), set it to **Public**
3. Upload all these files (drag & drop in the browser)
4. Go to Settings → Pages → set Source to `main` branch → Save
5. Your app is live at `https://YOUR-USERNAME.github.io/gym-tracker`

### Option B — Netlify (drag & drop)
1. Go to netlify.com → sign up free
2. Drag the entire `gym-tracker` folder onto the deploy area
3. Done — you get a URL like `https://abc123.netlify.app`

## Install on Android
1. Open the URL in **Chrome** on your Android phone
2. Tap the menu (⋮) → **"Add to Home screen"**
3. Tap **Add** — the app icon appears on your home screen
4. It opens fullscreen, works offline, just like a native app

## Your data
All workout data is stored locally on your device using `localStorage`.
No account, no server, no data leaves your phone.

## Customise
All the app code is in `index.html` — it's one file, easy to edit.
Change colours in the `:root` CSS variables at the top.
