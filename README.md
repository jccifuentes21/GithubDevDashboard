# GitHub Dev Dashboard

A personal analytics dashboard for GitHub profiles. Enter any GitHub username and get a visual breakdown of their public repositories, language usage, and recent activity.

## What it does

- **Profile overview** — avatar, bio, follower count, and account stats
- **Repository browser** — full repo list with search, sort by name/stars/last updated, and filter by source/forked/language
- **Language breakdown** — aggregated language stats across all repos
- **Activity graph** — push event history over the last 90 days
- **Repo detail view** — per-repo language breakdown and recent events
- **Persistent state** — last searched username and preferences survive refresh
- **Rate limit awareness** — displays remaining API calls, handles 403s gracefully
- **Dark/light mode**

## Tech stack

| Concern | Tool |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | TypeScript (strict mode) |
| Routing | React Router v7 |
| Data fetching | TanStack Query v5 |
| Global state | Zustand |
| Styling | Tailwind CSS v4 |
| Testing | Vitest + React Testing Library |
| Data source | GitHub REST API (unauthenticated, rate limit aware) |

## Architecture decisions

**Client-side filtering** — all repo filtering and search runs client-side. GitHub's search API has a rate limit of 10 req/min unauthenticated, making it unsuitable for interactive filtering. Fetching all repos once and filtering in memory gives instant results with no extra API calls.

**TanStack Query for server state** — user data, repos, languages, and events are cached by query key. Navigating back to a previously searched user is instant — no refetch until the cache goes stale.

**Zustand for UI state** — sort order, active filters, language selection, and theme are persisted to localStorage. Username is also persisted so the last searched profile loads on refresh.

**URL as state for active repo** — the selected repo lives in the URL (`/:username/:repo`), not in the store. This makes repo detail pages shareable and bookmarkable.

## Getting started

```bash
npm install
npm run dev
```

## Data source

All data is fetched directly from the [GitHub REST API](https://docs.github.com/en/rest). No authentication required. Unauthenticated requests are limited to 60 per hour — the app displays remaining rate limit and handles exhaustion gracefully.
