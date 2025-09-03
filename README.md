# Qiskit Fall Fest 2025 — University of Ottawa

This is a lightweight static website for our Fall Fest, deployable with **GitHub Pages** (no build step).

## Quick start

1. Create a new repo on GitHub (public), e.g. `fall-fest-2025-website`.
2. Upload these files (or push via git).
3. Go to **Settings → Pages** and set **Source = Deploy from a branch**, **Branch = main**, **Folder = /**.
4. Your site will be live at `https://<your-username>.github.io/<repo>/` in a minute.

### Custom domain (optional)

- Buy a domain or use a subdomain (e.g., `fallfest.uottawa.cloud`).
- In **Settings → Pages**, set your custom domain.
- Add the shown DNS records at your domain provider.
- Add a `CNAME` file at repo root with your domain to keep it linked.

## Edit content

- **Dates/Venue**: Update the hero section in `index.html`.
- **Schedule**: Edit `data/schedule.json` — it renders automatically.
- **Speakers/Mentors**: Duplicate the `<article class="person">…</article>` block.
- **Sponsors**: Replace `assets/logo-placeholder.svg` with real logos.
- **Registration**: Put your form link in the “Register” button at the bottom.

## Local preview

Open `index.html` in a browser. For fetch() of `data/schedule.json` to work locally, serve a tiny HTTP server:
```bash
python3 -m http.server 4000
# then open http://localhost:4000
```

## Optional: Use Jekyll instead

If you want markdown pages, blog posts, or nav generation, turn this into a Jekyll site:
- Add a file named `_config.yml` with a theme (e.g., `minima`) and move content into `_layouts` and `_includes`.
- Pages on GitHub Pages run Jekyll automatically without a workflow.

---
© 2025 Qiskit Fall Fest — uOttawa
