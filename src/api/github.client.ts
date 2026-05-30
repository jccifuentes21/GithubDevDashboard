import type {
  GithubRepo,
  GithubRepoLanguages,
  GithubUser,
  GithubEvent,
} from "../types/github.types";

const githubApi = "https://api.github.com/";

export const fetchUser = async (username: string): Promise<GithubUser> => {
  const response = await fetch(githubApi + `users/${username}`);
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(
      errorBody.message ?? `Github API error: ${response.status}`,
    );
  }
  return response.json();
};

export const fetchRepos = async (username: string): Promise<GithubRepo[]> => {
  const response = await fetch(
    githubApi + `users/${username}/repos?per_page=100`,
  );
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(
      errorBody.message ?? `Github API error: ${response.status}`,
    );
  }
  return response.json();
};

export const fetchLanguages = async (
  owner: string,
  repo: string,
): Promise<GithubRepoLanguages> => {
  const response = await fetch(githubApi + `repos/${owner}/${repo}/languages`);
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(
      errorBody.message ?? `Github API error: ${response.status}`,
    );
  }
  return response.json();
};

export const fetchEvents = async (username: string): Promise<GithubEvent[]> => {
  const response = await fetch(
    githubApi + `users/${username}/events?per_page=100`,
  );
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(
      errorBody.message ?? `Github API error: ${response.status}`,
    );
  }
  return response.json();
};
