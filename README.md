# WorldFirst SEA — S2 Retreat 2026 (Ho Chi Minh City)

Internal landing page for the WorldFirst SEA team retreat, **13–15 Aug 2026**.

🔒 **Internal only.** This page contains attendee names, flights and dietary info. The repo is
private and the page carries a `noindex` tag. Do **not** publish it to a public URL without
stripping the personal data first. (Budget figures are intentionally **not** included here.)

---

## How it's built

Two files, deliberately kept simple — no build step, no dependencies:

| File | What it is |
|------|-----------|
| `index.html` | The page template + styling + a small render script. **You rarely touch this.** |
| `data.js`    | **All the retreat content** (itinerary, venues, roster, flights). **This is what you edit.** |

`index.html` reads the `RETREAT` object from `data.js` and builds every section from it.
Open `index.html` in any browser to view it.

## ✏️ How to update the page

Because content lives in `data.js`, updating is a **one-file edit**:

1. Open `data.js`.
2. Edit the relevant array — e.g. add a person to `roster`, change a `time` in `itinerary`,
   fix a flight in `flights`.
3. Save and commit. The page picks up the change automatically — no HTML editing.

Room type values are `"single"`, `"double"`, or `"tbc"`. Leave `diet`/`notes` as `""` if none.

## 🔄 Keeping it in sync with alidocs

The **source of truth stays in the alidocs (DingTalk) planning sheet.** This repo is a
published snapshot of it. Two ways to keep them aligned:

- **On-demand (recommended):** When the sheet changes, ask Claude to
  *"re-sync the retreat page from alidocs"*. It reads the sheet (via the browser, using your
  DingTalk login), updates `data.js`, and commits. Takes ~1 minute. Reliable because the sheet
  requires your login, which an unattended job can't provide.
- **Manual:** Edit `data.js` yourself to match the sheet.

> ⚠️ Fully automated/scheduled syncing isn't reliable here — alidocs needs an interactive
> DingTalk login, so a headless cron can't read it. On-demand sync is the robust path.

`data.js` records a `Last synced from alidocs:` date at the top — update it when you re-sync.

## 🌐 Hosting

The repo is private (good for the data). For a shareable **URL**, see the options discussed with
the team — note that GitHub Pages on a private repo either isn't available (Free plan) or serves a
**publicly-accessible** site (Pro), so a team-access-controlled host (e.g. Cloudflare Pages +
Access, or internal hosting) is the better fit for sensitive content.
