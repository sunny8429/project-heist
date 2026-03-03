# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Next.js on localhost:3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint with Next.js core-web-vitals + TypeScript rules)
- **Run all tests:** `npm test`
- **Run a single test file:** `npx vitest run tests/components/Navbar.test.tsx`
- **Run tests matching a name:** `npx vitest run -t "renders the main heading"`

## Architecture

Next.js 16 App Router project using React 19, TypeScript, and Tailwind CSS v4.

### Route Groups

- `app/(public)/` — Unauthenticated pages: splash (`/`), login (`/login`), signup (`/signup`), component preview (`/preview`)
- `app/(dashboard)/` — Authenticated pages behind `Navbar`: heist list (`/heists`), heist detail (`/heists/[id]`), create heist (`/heists/create`)

The root `/` page is intended as a redirect: logged-in users go to `/heists`, others to `/login`.

### Components

Components live in `components/<Name>/` with barrel exports (`index.ts`) and CSS Modules (`<Name>.module.css`).

### Styling

Tailwind v4 with custom theme tokens defined via `@theme` in `app/globals.css`. Key colors: `primary`, `secondary`, `dark`, `light`, `lighter`, `success`, `error`, `heading`, `body`. CSS Modules reference globals.css with `@reference "../../app/globals.css"` to access theme values.

### Testing

Vitest with jsdom environment, React Testing Library, and `@testing-library/jest-dom` matchers (auto-loaded via `vitest.setup.ts`). Test globals are enabled — no need to import `describe`, `it`, `expect`. Tests mirror source structure under `tests/`.

### Path Aliases

`@/*` maps to the project root (e.g., `import Navbar from "@/components/Navbar"`).

### Icons

Uses `lucide-react` for icons.
