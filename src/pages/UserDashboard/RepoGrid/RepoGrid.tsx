import type { GithubRepo } from "../../../types/github.types";
import RepoCard from "./RepoCard";

interface RepoGridProps {
  repos: GithubRepo[];
}

const RepoGrid = ({ repos }: RepoGridProps) => {
  if (repos.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-[oklch(0.48_0.012_210)] text-sm">
        No repositories found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoGrid;
