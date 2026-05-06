# Publication figures

Drop publication figures (PNG / JPG / WebP) into this folder and reference
them from `publications.ts` via the `image` field, e.g.:

```ts
{
  // ...
  image: "media/publications/dt-gpt.png",
  imageAlt: "DT-GPT digital twin forecasting overview",
}
```

Recommended specs:

- Aspect ratio: roughly **4:3** (e.g. 1200×900). The carousel card crops to
  4:3 on desktop and 16:9 on mobile via `object-fit: cover`.
- Format: `webp` or compressed `png` / `jpg`. Keep each file under ~500 KB
  for fast page loads.
- File names: lowercase, hyphenated, no spaces. e.g. `oncobird-figure.webp`.

Leave `image: ""` if you don't have a figure yet — the card will render
text-only and span the full width.
