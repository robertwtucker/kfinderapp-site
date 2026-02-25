# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for the KFinder iOS app (anti-coagulation therapy management with Vitamin K tracking). Built with Next.js App Router, deployed on Vercel.

## Commands

- **Dev server**: `pnpm dev` (uses Turbopack)
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **Package manager**: pnpm (v10.30.2)

There is no test suite.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript (strict mode)
- Tailwind CSS 4 with CSS-first configuration (`@theme` in `globals.css`)
- CSS variables (HSL colors) for theming
- Radix UI primitives + shadcn/ui component patterns (CVA for variants)
- TelemetryDeck for analytics (configured via `TELEMETRY_DECK_APP_ID` env var)

## Architecture

**Routing**: File-based via `app/` directory. Pages are server components by default. Routes: `/`, `/support`, `/legal/privacy`, `/legal/terms`, `/legal/disclaimer`.

**Components**: `components/ui/` contains reusable primitives (button, accordion, input) using CVA variant pattern and Radix UI. `components/` has layout components (header, footer) and a smart `Link` component that handles internal/external/anchor links automatically.

**Config**: `config/site.ts` holds site metadata and analytics config. Path alias `@/*` maps to the project root.

**Styling**: Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional class merging. Theme colors are CSS variables in `globals.css`. Custom colors, border-radius, and animations are defined in the `@theme inline` block.

## Conventions

- All source files include SPDX license headers: `SPDX-FileCopyrightText: (c) 2024 Robert Tucker` and `SPDX-License-Identifier: MIT`
- Import order is enforced by Prettier: React/Next core, third-party, types, config/lib, UI components, feature components, relative imports
- Prettier: single quotes, 100-char line width
- ESLint extends `next/core-web-vitals`, `next/typescript`, `prettier`

## Workflow

- Direct commits to `master` for minor changes; feature branches for complex changes
- CI runs `pnpm build` on push/PR to master (Node.js 22)
- PR titles must follow semantic commit format (enforced by CI)
- Dependabot runs monthly for npm dependency updates
