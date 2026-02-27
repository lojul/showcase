# Featured project images

One folder per project under `public/featured/`. Put your hero/screenshot image(s) in the matching folder.

**Wired in the showcase:**
- `quick-poll/` → Quick Poll Lightstreamer (uses first part image)
- `pokewonder/` → Pokemon Info Page (uses first part image)

**To add images for other projects:** create a folder (e.g. `applicant-tracking`, `recruit-website`, `hide-seek`, `minigames`, `table-tennis`), add an image (e.g. `hero.png`), then in `app/data.ts` set that project’s `image` to `/featured/<folder>/<filename>`.

Recommended: 16:9 aspect ratio, ~1200×675px or larger; Next.js will optimize.
