# GitHub API — Fields We Actually Use

Reference for the dashboard: which endpoints to call, which fields matter, and what to ignore.

| Endpoint | Purpose |
|----------|---------|
| `GET /users/:username` | Profile header |
| `GET /users/:username/repos?per_page=100` | Repo list |
| `GET /repos/:owner/:repo/languages` | Per-repo language breakdown |
| `GET /users/:username/events?per_page=100` | Recent activity |

---

## User

`GET /users/:username`

```json
{
  "login": "torvalds",
  "avatar_url": "https://avatars.githubusercontent.com/u/1024025?v=4",
  "html_url": "https://github.com/torvalds",
  "name": "Linus Torvalds",
  "company": "Linux Foundation",
  "location": "Portland, OR",
  "bio": null,
  "public_repos": 11,
  "followers": 305041,
  "following": 0,
  "created_at": "2011-09-03T15:26:22Z"
}
```

> **Skip the rest** — `node_id`, `*_url` template strings, and similar fields are noise. You won't use them.

---

## Repos

`GET /users/:username/repos?per_page=100`

Per repo, what you care about:

```json
{
  "id": 940929652,
  "name": "1590A",
  "full_name": "torvalds/1590A",
  "html_url": "https://github.com/torvalds/1590A",
  "description": "Random odd guitar pedal design in kicad",
  "fork": false,
  "languages_url": "https://api.github.com/repos/torvalds/1590A/languages",
  "stargazers_count": 566,
  "forks_count": 22,
  "open_issues_count": 0,
  "language": "OpenSCAD",
  "archived": true,
  "visibility": "public",
  "default_branch": "main",
  "created_at": "2025-03-01T04:36:29Z",
  "updated_at": "2026-05-24T17:40:00Z",
  "pushed_at": "2025-09-19T02:54:14Z"
}
```

> **Note:** `language` is the **primary language only**. For a full breakdown, call `languages_url`.

---

## Languages

`GET /repos/:owner/:repo/languages`

```json
{
  "C": 1404491595,
  "Assembly": 9720041,
  "Shell": 5928375,
  "Rust": 4787430
}
```

| Detail | Implication |
|--------|-------------|
| Values | Raw byte counts — compute percentages yourself |
| Cost | One call **per repo** — this is the expensive endpoint |

---

## Events

`GET /users/:username/events?per_page=100`

```json
{
  "id": "12566454056",
  "type": "PushEvent",
  "repo": { "name": "torvalds/linux" },
  "payload": {
    "ref": "refs/heads/master",
    "head": "f3be0c984e..."
  },
  "created_at": "2026-05-29T23:39:46Z"
}
```
