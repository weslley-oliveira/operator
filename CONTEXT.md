# devroast — context

Code roasting app. Users paste code → get a brutal AI score (0–10) + analysis. Leaderboard ranks the worst code on the internet.

## stack

| | |
|---|---|
| **Next.js 16** (App Router) | pages in `src/app/` |
| **Tailwind CSS v4** | utility-first, no config file |
| **tailwind-variants** (`tv`) | component variant definitions |
| **tailwind-merge** (`twMerge`) | safe className merging |
| **@base-ui/react** | headless primitives (Toggle/Switch) |
| **shiki** | server-side syntax highlight, vesper theme |
| **Biome** | lint + format (`npm run check`) |

## design tokens (dark-only app)

```
bg:      #0A0A0A (page)  #0F0F0F (surface)  #111111 (input)
border:  #2A2A2A
text:    #FAFAFA (primary)  #6B7280 (secondary)  #4B5563 (tertiary)
accent:  #10B981 (green)  #EF4444 (red)  #F59E0B (amber)
font:    JetBrains Mono → var(--font-mono)
```

## component conventions (`src/components/ui/`)

- **Named exports only** — never `export default`
- `tv()` defined at module scope, never inside the component
- `twMerge(tv({...}), className)` on every root element
- Extend native HTML props via `ComponentProps<'element'>`
- `'use client'` only when strictly needed (Toggle, interactive hooks)
- Server components: async functions, no directive (CodeBlock)
- See `src/components/ui/CONTEXT.md` for full component table

## routes

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — code input + leaderboard preview |
| `/components` | `src/app/components/page.tsx` | UI component showcase |

## key patterns

```tsx
// client page with interactive state
'use client';
import { useState } from 'react';

// server component (no directive needed)
export async function CodeBlock({ code, lang }: Props) { ... }

// score color helper (used in LeaderboardRow, ScoreRing)
score >= 7 → emerald-500   score >= 4 → amber-500   score < 4 → red-500
```

## commands

```bash
npm run dev      # dev server
npm run build    # production build + type check
npm run check    # biome lint + format (auto-fix)
```
