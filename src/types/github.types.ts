export interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  languages_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  archived: boolean;
  visibility: string;
  default_branch: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface GithubRepoLanguages {
  [key: string]: number;
}

type EventType = "PushEvent" | (string & {});

export interface GithubEvent {
  id: string;
  type: EventType;
  repo: { name: string };
  payload: { ref: string; head: string };
  created_at: string;
}
