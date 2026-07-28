# Deployment Guide (Vercel)

This file covers hosting steps only — see `README.md` for what the portfolio itself contains.

## 1. Install dependencies

```bash
npm install
```

## 2. Preview locally (optional)

```bash
npm run dev
```

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/RabeeaAnjum/YOUR-REPO-NAME.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project**, import the repository you just pushed.
3. Leave the default Vite build settings as-is.
4. Click **Deploy**.

Your site goes live at `your-project-name.vercel.app` within a minute or two.

## 5. (Optional) Enable the chat assistant

The "Ask my assistant" chatbot on the Contact page needs your own Anthropic API key:

1. Get a key at https://console.anthropic.com (Settings → API Keys).
2. In your Vercel project: **Settings → Environment Variables** → add `ANTHROPIC_API_KEY` with your key as the value.
3. Redeploy (Deployments → latest → ⋯ → Redeploy) so the variable takes effect.

Anthropic usage is billed to your account per request — the assistant only sends short answers, so cost is minimal for normal traffic. Skipping this step is fine; the rest of the site works independently of it.

## Notes on data storage

Edits made via the **Edit** button are saved to the visiting browser's local storage. That means edits you make will only show up in the browser/device you made them on — they won't sync across devices or to other visitors. If you'd like edits to sync everywhere (a real backend), that's a bigger upgrade — ask if you want that added.
