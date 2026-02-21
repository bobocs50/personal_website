# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, and route handlers.
- `components/`: Shared React components (including `components/ui/`).
- `hooks/`: Reusable React hooks.
- `lib/`: Utilities, helpers, and shared logic.
- `public/`: Static assets served at the site root.
- `styles/`: Global styles and Tailwind-related CSS.

## Build, Test, and Development Commands
- `npm run dev`: Start the local Next.js dev server.
- `npm run build`: Create a production build.
- `npm run start`: Run the production build locally.
- `npm run lint`: Run ESLint across the repository.

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js).
- Indentation: 2 spaces (follow existing formatting).
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`).
- Hooks: `useCamelCase.ts` (e.g., `useScrollLock.ts`).
- Utilities: `camelCase.ts` in `lib/`.
- Styling: Tailwind CSS; prefer utility classes and `clsx`/`tailwind-merge` for conditional styles.

## Testing Guidelines
- No automated tests are configured in this repo yet.
- If adding tests, document the framework, add a script in `package.json`, and place files in a conventional location (e.g., `__tests__/` or `*.test.tsx`).

## Commit & Pull Request Guidelines
- Commits loosely follow Conventional Commits. Use prefixes like `feat:` and `refactor:` when possible.
- Keep commits scoped and descriptive (e.g., `feat: add Vercel Analytics support`).
- PRs should include a clear summary, screenshots for UI changes, and note any follow-up tasks or tradeoffs.

## Configuration & Security Notes
- Environment configuration should live in `.env.local` and never be committed.
- Check `next.config.mjs`, `tsconfig.json`, and `postcss.config.mjs` when changing build or tooling behavior.
