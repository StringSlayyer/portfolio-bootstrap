# Homepage wireframe – structure

Personal portfolio of a developer, musician and photographer. Bootstrap 5.3 + custom CSS. Dark theme (#121212 background, #EDEDED text) with a dark-red accent (#8B1E2B). Content in Czech with a CZ / EN language switch. Headings: Instrument Serif, body: Inter.

The required wireframe is the homepage on a smartphone (390 px). Tablet (768 px) and desktop (1440 px) versions show how the layout adapts.

## Elements (numbers match the markers in the wireframe)

1. **Header / navbar** – styled text logo "Jméno." (dot in accent) on the left. Mobile and tablet: CZ / EN switch, theme switch (dark/light) and hamburger button opening an offcanvas menu. Desktop (≥ 992 px): full menu with icons (Domů, O mně, Projekty, Fotografie, Hudba, Kontakt; active item highlighted in accent tint), language switch and theme switch in the bar. Sticky, semi-transparent with backdrop blur.
2. **Carousel** – directly under the navbar, full width. 3–4 rotating photos (night sky, sunset) with headline "Kód, struny a světlo" and a short caption in a semi-transparent box over the image, prev/next arrows and indicators. Height ≈ 280 px mobile / 400 px tablet / 560 px desktop.
3. **Intro** – small uppercase label "VÝVOJÁŘ · HUDEBNÍK · FOTOGRAF", heading "Ahoj, jsem [Jméno]. Vyvíjím VR aplikace.", two sentences. Buttons: "Moje projekty" (solid, light) and "GitHub" (outline with icon); on desktop also a text link "O mně →". Desktop: text in 7 of 12 columns, portrait photo in 4 columns on the right.
4. **Bento navigation cards** – Projekty (large: Viademy VR · GitHub · škola, link "Zobrazit projekty →"), Hudba (Klavír · harfa · kytara, "Poslechnout →"), Foto (card with photo background, "Galerie →"). Mobile: Projekty full width, Hudba + Foto side by side below. Tablet: 2 columns, Projekty spans two rows on the left. Desktop: 4-column grid, Projekty 2×2, Hudba and Foto 2×1 each on the right.
5. **Music highlight** – slightly lighter band (#1C1C1C). Heading "Nejnovější cover na harfu", YouTube embed in `ratio ratio-16x9`, short text, buttons "Všechna hudba" (outline) and "Instagram" (link). Mobile: stacked. Tablet: video 3/5, text 2/5. Desktop: video 7/12, text 5/12.
6. **Selected photos** – heading "Výběr fotek" (desktop: plus "Celá galerie →" link on the right). Thumbnail grid: 3 columns mobile (2 rows), 4 columns tablet (2 rows), 6 columns desktop (1 row). Click opens a modal with larger photo and details (place, date, camera settings).
7. **Contact call-to-action** – bordered box: heading "Pojďme spolupracovat", one sentence, accent button "Napište mi" with icon. Mobile: stacked; tablet/desktop: text left, button right.
8. **Footer** – darkest background. Logo, ©, social icons (GitHub, YouTube, Instagram, e-mail). Desktop: 3 columns (logo + ©, short sitemap, icons).
9. **Mobile menu (offcanvas)** – slides in from the right (≈ 310 px wide) over the dimmed page. Logo + close button, six items with icons (active highlighted), at the bottom: language switch, dark mode toggle, social icons. Touch targets ≥ 44 px.

## Breakpoints

| Width | Layout |
|---|---|
| < 768 px (phone) | one column, hamburger + offcanvas, stacked sections |
| 768–991 px (tablet) | two-column cards and music section, hamburger + offcanvas |
| ≥ 992 px (desktop) | full navbar, 12-column grid, content in a centered container (~1200 px) |

## Pages (menu items)

| Page | Content and components |
|---|---|
| Domů / Home | carousel, buttons, bento cards, photo detail modal |
| O mně / About | breadcrumb, portrait, bio, skills, timeline |
| Projekty / Projects | breadcrumb, tabs (Práce / Open source / Škola), project detail modal |
| Fotografie / Photography | breadcrumb, category filter, masonry gallery with modal, optional DataTable photo catalogue |
| Hudba / Music | breadcrumb, tabs (Klavír / Harfa / Kytara), YouTube embeds, DataTable repertoire (50+ rows) |
| Kontakt / Contact | breadcrumb, form with 10+ fields, input groups, floating labels, Save button |
