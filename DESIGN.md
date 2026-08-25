---
name: CaQuAnh Portfolio
description: Pixel-brutalist broadcast-desk portfolio — cream paper, 4px ink rules, hard offset shadows, bitmap display type.
colors:
  paper: "#F5EFE0"
  paperDeep: "#EDE4CF"
  ink: "#111111"
  yellow: "#FFE14D"
  yellowSoft: "#F0D97E"
  red: "#F05B5B"
  blue: "#6487E8"
  green: "#63C98A"
  cyan: "#74C7E3"
typography:
  display:
    fontFamily: '"Space Grotesk", sans-serif'
    fontSize: "clamp(1.5rem, 1rem + 2.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.02em"
  wordmark:
    fontFamily: '"Space Grotesk", sans-serif'
    fontSize: "clamp(1.4rem, 1.2rem + 0.6vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.03em"
  section-title:
    fontFamily: '"Space Grotesk", sans-serif'
    fontSize: "clamp(1.2rem, 1rem + 1vw, 1.7rem)"
    fontWeight: 400
    letterSpacing: "-0.02em"
  label:
    fontFamily: '"Space Grotesk", sans-serif'
    fontSize: "0.85rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  chrome:
    fontFamily: '"Silkscreen", monospace'
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.12em"
  body:
    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  block: "14px"
  small: "9px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.block}"
    padding: "1rem 1.6rem"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.block}"
    padding: "1rem 1.6rem"
  chip-placeholder:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.2rem 0.55rem"
  chip-type:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: "0.2rem 0.55rem"
---

# Design System: CaQuAnh Portfolio

## Overview

**Creative North Star: "The Broadcast Desk"**

This site is a transmission studio rendered on cream paper: a fixed identity rail on the left acts as the anchor booth, while content broadcasts on the right. Every element is a physical broadcast prop — bordered like a switch-panel block, shadowed like a key sitting proud of the desk, animated in discrete mechanical steps rather than smooth fades. The world refuses the centered-hero-plus-card-grid template entirely.

The material character is Neo-Brutalism executed with pixel-font typography: bold flat color fields (signal yellow, alarm red, wire blue, terminal green, sky cyan) separated exclusively by hard 4px black rules, with depth expressed only as unblurred offset blocks of pure ink. Nothing glows, nothing blurs, nothing rounds. Motion is deliberately mechanical — bar fills count up in stepped increments, entrances land in `steps(4)` like a rubber stamp, status indicators blink like LEDs. Density is generous but rhythmic: large breathing room between segments, tight internal padding inside bordered blocks.

Bilingual content (Vietnamese + English) flows through one typographic voice; pixel display faces carry English statements while readable Vietnamese body copy stays in the human-readable system stack.

**Key Characteristics:**
- Cream paper ground (#F5EFE0) with a subtle ruled-line texture behind the rail
- 4px solid ink (#111111) border on every structural element — no exceptions
- Hard, unblurred offset shadows (8px/8px and 5px/5px, always pure ink)
- Flat color fields only: yellow / red / blue / green / cyan on paper and ink
- Space Grotesk 700 as the single display/data voice (wordmark, hero, section titles, block headings, tiles, values); Silkscreen for chrome labels
- Softened corner rounding system-wide: 14px on blocks (buttons, cards, tiles, social links, about block), 9px on small elements (chips, tags, nav keys, bar tracks, title plates)
- Mechanical motion: `steps()` easing everywhere, stepped bar fills and entrances, blinking cursors
- Pixel-art SVG imagery (`shape-rendering: crispEdges`, `image-rendering: pixelated`)

## Colors

A flat broadcast palette tuned for long reading: warm paper and dense ink do all the structural work, while five softened signal colors (≈80% chroma of the original broadcast set) act as switch-panel indicator fields. Full-saturation yellow is rationed to the single loudest moment per viewport; alternating segment grounds give the scroll a resting rhythm.

### Primary
- **Signal Yellow** (#FFE14D): the brand's loudest voice, now rationed. Primary CTAs and highlighted words inline in headlines (`<em>` treatment) only. If something must be noticed first, it is yellow — and nothing else in the viewport competes at this saturation.

### Soft Yellow
- **Muted Signal Yellow** (#F0D97E): the working yellow. Portrait-block ground, fact tiles, large skill tiles, striped bar fills, and the offset shadow under segment titles. Reads unmistakably as the brand yellow at ~15% lower luminance and chroma.

### Secondary
- **Alarm Red, dimmed** (#F05B5B): urgency accents only. Third nav block hover, fact-tile STATUS field, the LEARNING chip on chart labels, the weather strip's offline LED, the red text-shadow behind the stacked CAQUANH wordmark, and the shirt in the pixel portrait. Red never appears full-bleed.
- **Wire Blue, dimmed** (#6487E8): informational fields. Tech-stack tags, the MODE fact tile, fourth nav block hover, and the global focus-visible outline color.
- **Terminal Green, dimmed** (#63C98A): live/positive signals. Status dot ("OPEN TO WORK"), second nav block hover, project media panel C, and the `>_` prompt glyph.
- **Sky Cyan, dimmed** (#74C7E3): cool highlight. First nav block hover, strong-name inline highlight in the intro paragraph, skill-tile hover state, project media panel A, and screen glyphs inside project art.

### Neutral
- **Cream Paper** (#F5EFE0): page background and default block fill; inverted-text color on ink grounds (rail role badge, segment titles, colophon).
- **Deep Paper** (#EDE4CF): alternating segment ground (ABOUT, SKILLS). Gives the scroll rhythm without introducing gray.
- **Ink** (#111111): every border, every hard shadow, all display type, footer groundand colophon ground, and selection background.

### Named Rules
**The Ink Border Rule.** Every structural element carries a 4px solid #111111 border (chips, tags, and inline highlights use the 3px small variant). An element floating without an ink rule is off-system — the only borderless things in this world are raw text lines.

**The Dark Broadcast Rule.** The dark theme is the same broadcast desk at night: paper flips to warm near-black (#1A1611 / deep #241E15), ink flips to cream (#F2ECDC) and carries every border, shadow, and line of default text — the Ink Border Rule survives intact. Signal fields keep their hues but flip their text to near-black `--field-ink` (#14110B); inverted blocks (segment titles, footer, role badge) simply swap grounds. Nothing blurs, nothing glows, no new accent colors.

**The Two Grounds Rule.** Color fields sit on exactly two grounds: paper or deep paper (light mode blocks) or ink (inverted blocks). A colored field is always paired with ink text; white text does not exist in this system.

**The One Loud Voice Rule.** Full-saturation Signal Yellow appears only on primary CTAs and inline headline highlights. Every other former instance uses Muted Signal Yellow. No saturated field ever spans a full viewport width.

## Typography

**Display Font:** Space Grotesk, weight 700 (fallback: body stack) — loaded from Google Fonts
**Label/Chrome Font:** Silkscreen, weight 400/700 (fallback: monospace) — loaded from Google Fonts
**Body Font:** System UI stack (`system-ui, -apple-system, "Segoe UI", sans-serif`)

**Character:** One human shout, one pixel whisper. Space Grotesk 700 carries every heading and data label — wordmark, hero statement, section titles, chart labels, project names, skill tiles, fact values, buttons, nav, status line — with uppercase transforms and tight tracking; Silkscreen stamps only the few operational chrome pieces left (rail role badge, theme toggle, skip link); the system stack quietly carries bilingual reading copy so long Vietnamese sentences stay legible.

### Hierarchy
- **Wordmark** (Space Grotesk 700, clamp(1.7rem → 2.3rem), line-height 1.1, tracking −0.02em, uppercase, red 3px offset text-shadow): the stacked CA/QU/ANH identity block in the rail only.
- **Display** (Space Grotesk 700, clamp(2rem → 4rem), line-height 1.15): the two-line hero statement. Single emphasized words get the yellow-bordered-inline-block treatment.
- **Section Title** (Space Grotesk 700, clamp(1.5rem → 2.4rem), uppercase): PROJECTS / SKILLS / CONNECT set as ink-filled blocks with yellow-soft offset shadow and a blinking `_` cursor tick.
- **Chart Labels** (Space Grotesk 700, 1.35rem, uppercase, line-height 1.3): WEB DEVELOPMENT / CYBERSECURITY group headings with chips inline.
- **Block Titles** (Space Grotesk 700, 1.4rem uppercase): project names; fact-tile values at 1.25rem.
- **Skill Tiles** (Space Grotesk 700, three steps: 1.35rem large / 1.05rem standard / .9rem small): encodes skill priority through size alone.
- **Label** (Space Grotesk 700, 1rem, letter-spacing .04em, uppercase): skill bar names, tech tags, and the weather strip's station label; Silkscreen 700 (.78–.95rem) remains only for the role badge, theme toggle, and skip link; the colophon runs in the system stack at .9rem.
- **Body** (system-ui 400, 1.0625rem, line-height 1.6): default reading copy; intro paragraph at 1.125rem capped at 58ch; section notes capped at 52ch.

### Named Rules
**The Two Voices Rule.** Space Grotesk shouts headlines and data labels; Silkscreen labels chrome. Never set long reading copy in a display face — each has exactly one job.

**The Human Body Rule.** Paragraphs and descriptions never use pixel faces. Reading copy belongs to the system stack; pixel type is reserved for short, loud strings.

## Layout

The page is a fixed split: a 300px identity rail pinned left (`grid-template-columns: 300px 1fr`, sticky, full viewport height, independently scrollable) and a content desk filling the rest. The rail stacks vertically — pixel portrait, stacked wordmark, role badge, three numbered nav blocks, status line pushed to the bottom via `margin-top: auto` — over a faint ruled-paper texture (repeating-linear-gradient at 24px pitch, 5% ink opacity).

Content flows down the desk as full-bleed horizontal bands: hero → ruled-off segments (ABOUT, PROJECTS, SKILLS, CONNECT) → ink footer band. Each segment opens with `border-top: 4px solid ink`. All content inside the desk caps at `max-width: 62rem`; reading paragraphs cap at 52–58ch.

Spacing rhythm: segment padding `clamp(2.5rem, 6vh, 4rem)` vertical × `clamp(1.5rem, 4vw, 4rem)` horizontal; hero slightly taller at up to 5.5rem top. Internal block padding sits at 1–1.75rem; flex/grid gaps step through .55rem (tags) → 1.25rem (tiles/buttons/facts) → 2.5–3rem (between cards and section heads).

Responsive behavior:
- **≤900px:** the rail collapses into a wrapping horizontal header bar (border-bottom instead of border-right), portrait shrinks to 84px, wordmark flattens to one line, nav blocks stretch full-width in a row. Project cards stack — media panel moves above the body with a bottom border instead of right.
- **≤480px:** nav returns to a vertical column, fact tiles stack vertically, all buttons go full-width centered.

## Elevation & Depth

Depth is structural, not ambient. Every shadow is a hard, unblurred rectangle of pure ink offset down-right — the element reads as a physical object sitting above the paper. Shadows never blur, never use alpha, never change color; they shrink as elements "press" into the page.

### Shadow Vocabulary
- **Lifted** (`box-shadow: 8px 8px 0 #111111`): primary buttons at rest, project cards. The full-projection state.
- **Resting** (`box-shadow: 5px 5px 0 #111111`): nav blocks, skill tiles, fact tiles, portrait block, inline highlighted words. The default object height.
- **Pressed** (`translate 2–3px + shadow 3px 3px`): hover state across all interactive tiles — the object sinks halfway.
- **Fully pressed** (`translate 6px + shadow 2px 2px`): button `:active` — nearly flush with the paper.
- **Title plate** (`box-shadow: 6px 6px 0 #F0D97E, 6px 6px 0 4px #111111`): segment titles cast a double shadow — a yellow block wrapped by an ink outline. The only place a non-ink shadow appears.

### Named Rules
**The Hard Shadow Rule.** Shadows are flat ink rectangles: `X Y 0 #111111`, never blurred, never translucent. Depth changes happen by translating the element and shrinking its shadow together, so total projection stays consistent.

**The Press-In Rule.** Interactive elements move *into* the page on interaction (hover sinks partway, active sinks fully). Elements never float upward or grow on hover.

## Shapes

Corners are softened by a two-step radius scale: **14px (`--radius`) on structural blocks** — buttons, nav blocks, project cards, about block, social links, the portrait frame — and **9px (`--radius-sm`) on small elements** — chips, tech tags, bar tracks, skill tiles, fact tiles, segment-title plates, inline `<em>`/`<strong>` highlights. The status dot is a full circle. Structure still comes from the 4px ink border (3px on small elements: chips, tech tags, inline `<strong>` highlights, the status dot's ring); cards clip their own overflow so media panels respect the outer radius. Imagery follows the pixel-art law — all artwork is hand-authored pixel-art SVG with `shape-rendering: crispEdges`, displayed with `image-rendering: pixelated`: a 16×16 pixel portrait and 24×24 project glyphs drawn on flat color panels. Even the favicon is a pixel concentric-square mark in the palette. The recurring silhouette is the rounded bordered rectangle with a hard shadow; the only ornaments are operational — LED status dots and blinking cursor ticks.

## Components

### Buttons
- **Shape:** soft-corner bordered block (4px ink border, 14px radius), Space Grotesk 700 label, uppercase, letter-spacing .05em, arrow suffix (→) on primary actions.
- **Primary:** Signal Yellow ground (#FFE14D), ink text, padding 1rem 1.6rem, Lifted shadow (8px). Large variant (`btn-big`) scales to 1.25rem text and 1.3rem 2.2rem padding.
- **Ghost:** paper ground, identical geometry — the quiet sibling for secondary actions.
- **Hover / Active:** translate 3px down-right with shadow shrinking to 5px (hover); translate 6px with 2px shadow (active). Transition in `steps(2)` over .12s — the press feels mechanical, not eased.

### Chips
- **Style:** 3px ink border, Space Grotesk 700 at .85rem, letter-spacing .06em, padding .2rem .55rem.
- **Variants:** placeholder chip (ink ground, yellow text — flags sample content honestly) and type chip (paper ground). Tech tags reuse the chip form on Wire Blue ground at .8rem.

### Cards (Project Blocks)
- **Corner Style:** 14px radius, 4px ink border, overflow hidden so the media panel respects the radius.
- **Background:** paper, with the media panel carrying one flat signal color (cyan / yellow / green rotation).
- **Shadow Strategy:** Lifted (8px 8px ink) — cards sit highest of any element.
- **Border:** internal 4px rule divides media panel from body.
- **Internal Padding:** media panel 1.5rem around a 96px pixel glyph; body 1.5rem vertical × 1.75rem horizontal.
- **Layout:** desktop `220px | 1fr` grid (glyph panel left, content right); stacks vertically ≤900px.

### Navigation (Rail Nav Blocks)
- **Style:** full-width bordered blocks with a leading key square (ink ground, yellow number, 1.7em square) + Space Grotesk 700 label at 1.05rem.
- **States:** rest on paper with Resting shadow; hover translates 2px into a per-item signal color (cyan / green / red by position) with Pressed shadow; focus-visible gets the global 4px Wire Blue outline.
- **Mobile:** row layout ≤900px, back to column ≤480px.

### Fact Tiles
Bordered label/value blocks (min-width 10rem): Space Grotesk 700 dt label (.95rem, tracked) over a Space Grotesk 700 dd value (1.25rem). Grounds rotate yellow / blue / red, always with ink text. Entrance-stamped last in the hero sequence.

### Skill Bars (Chart Groups)
Two labeled groups (WEB DEVELOPMENT / CYBERSECURITY): Space Grotesk 700 group headings carrying an inline chip (LEARNING on Alarm Red for the in-progress group), over rows of an `11rem | 1fr | 3rem` grid — right-aligned bar name, bordered track (4px ink, 2.2rem tall, paper ground, Resting shadow) holding a flat signal-color fill, and a bare Space Grotesk numeral. Fills animate width from 0 to `--level`% in `.7s steps(12)` when scrolled into view; rows still being learned carry a yellow-soft diagonal stripe fill instead of a solid field. Tracks expose `role="progressbar"` with `aria-valuenow`.

### Tech Wall
A wrapping flex row of small bordered Space Grotesk 700 tiles (.9rem, paper ground, Resting shadow). Hover sinks 2px and recolors to Sky Cyan.

### Footer
Ink-ground block closing the page: Space Grotesk 700 wordmark line, inline uppercase nav links (paper text, yellow underline on hover), and a quiet system-font colophon.

### Theme Toggle
A small bordered Silkscreen button in the rail footer beneath the status line, pairing a hand-drawn pixel moon/sun icon (`crispEdges`, `currentColor`) with a target-mode label ("DARK" while light, "LIGHT" while dark) — the label always announces what pressing does. Press states follow the standard press-in vocabulary (hover sinks 2px/3px shadow, active 4px/2px). Choice persists in localStorage under `caquanh-theme`; first visit defaults to Light regardless of OS preference. An inline head script applies the saved theme before first paint to prevent flash, and the `theme-color` meta updates with each switch. Switching is instant — no cross-fade — per the mechanical-motion law.

### Live Weather Strip
A full-width strip under the about block, split by an internal 4px rule: a Sky Cyan icon panel on the left holding a hand-drawn crisp-edge pixel weather glyph (sun, moon, partly, cloudy, fog, rain, snow, storm — palette hexes only), and a data column on the right. The data column stacks a Space Grotesk 700 tracked uppercase station label ("LIVE WEATHER · HANOI") with a blinking green LED dot over a large temperature readout plus a small condition word. Data comes from Open-Meteo (client-side, no key), refreshed every 10 minutes; on failure the readout falls back to `--°C` / OFFLINE, the LED turns solid red, and the panel empties until the next cycle recovers.

### Signature: Segment Title Plate
Ink-filled inline block holding Space Grotesk 700 section titles in paper-colored text, casting the double yellow-and-ink shadow, ending in a blinking yellow underscore cursor (blink 1.2s `steps(2)` infinite).

### Themed Browser Surfaces
Selection is ink-on-yellow (`::selection`). Scrollbar is themed: 14px wide, paper track with an ink left border, ink thumb inset by a 3px paper border. Focus rings are 4px solid Wire Blue with 3px offset (`:focus-visible`). Smooth scrolling anchors throughout; disabled under reduced motion.

### Motion Grammar
- **Bar fill:** width animates from 0 to `--level`% in `.7s steps(12)` once the track scrolls into view (IntersectionObserver, threshold .4).
- **Entrance:** hero statement lines, intro, actions, and facts start hidden (opacity 0, translated 14px down) and stamp in via `stamp-in` (.38s `steps(4)` forwards) staggered .12–.6s after DOM load.
- **Blink:** status dot and weather LED (1.6s), title cursor ticks (1.2s), both `steps(2)` — instant LED-style toggling, never faded.
- **Press interactions:** all hover/active transitions use `steps(2)` at .12–.15s.
- **Reduced motion:** `prefers-reduced-motion: reduce` kills bar-fill transitions, blinks, smooth scrolling, and forces entrance elements visible immediately.

## Do's and Don'ts

### Do:
- **Do** give every structural element a 4px solid #111111 border (3px on chips/tags/small highlights).
- **Do** express all depth as hard offset shadows: `8px 8px 0` lifted, `5px 5px 0` resting — pure ink, zero blur.
- **Do** animate with `steps()` easing; let entrances stamp, presses sink, and indicators blink discretely.
- **Do** pair any colored field with ink text, and reserve yellow for what must be seen first.
- **Do** draw all imagery as crisp-edge pixel SVG (`shape-rendering: crispEdges` + `image-rendering: pixelated`) on flat signal-color panels.
- **Do** honor `prefers-reduced-motion`: stop bar fills/blinks and reveal stamped content instantly.
- **Do** label placeholder content visibly (the ink/yellow PLACEHOLDER chip pattern) until real projects replace it.

### Don't:
- **Don't** invent new radius values — only the two tokens (`--radius` 14px blocks, `--radius-sm` 9px small elements) and the full-circle status dot.
- **Don't** use gradients, soft/blurred shadows, translucency, or glow — depth is flat ink offsets only.
- **Don't** introduce new accent colors; the palette is exactly paper, deep paper, ink, yellow, muted yellow, red, blue, green, cyan.
- **Don't** set body paragraphs or long bilingual copy in a display face — Space Grotesk and Silkscreen are for short loud strings and chrome only.
- **Don't** ease hover states smoothly or float elements upward on hover; interactions press *into* the page.
- **Don't** center a conventional hero-plus-card-grid layout; the split rail + broadcast desk structure is the identity.
