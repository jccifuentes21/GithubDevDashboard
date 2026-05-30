import { GitFork, Star } from "lucide-react";
import type { GithubRepo } from "../../../types/github.types";
import { useNavigate } from "react-router";

interface RepoCardProps {
  repo: GithubRepo;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "oklch(0.60 0.18 250)",
  JavaScript: "oklch(0.82 0.18 95)",
  Python: "oklch(0.68 0.16 240)",
  Go: "oklch(0.68 0.18 210)",
  Rust: "oklch(0.65 0.18 40)",
  C: "oklch(0.60 0.14 260)",
  "C++": "oklch(0.58 0.16 260)",
  Java: "oklch(0.62 0.18 30)",
  Ruby: "oklch(0.58 0.22 20)",
  Swift: "oklch(0.68 0.18 35)",
  Kotlin: "oklch(0.62 0.20 285)",
  OpenSCAD: "oklch(0.62 0.14 155)",
};

const getLanguageColor = (lang: string) =>
  LANGUAGE_COLORS[lang] ?? "oklch(0.58 0.010 210)";

const formatDate = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const RepoCard = ({ repo }: RepoCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(repo.name)}
      className="group flex flex-col gap-3 p-4 rounded-xl border border-[oklch(0.26_0.038_210)] bg-[oklch(0.18_0.035_210)] hover:border-[oklch(0.36_0.040_265)] hover:bg-[oklch(0.20_0.038_210)] transition-[border-color,background-color] duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[oklch(0.94_0.005_210)] font-medium text-sm leading-snug group-hover:text-[oklch(0.72_0.22_265)] transition-colors duration-150 truncate">
          {repo.name}
        </span>
        {repo.archived && (
          <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium bg-[oklch(0.22_0.030_210)] text-[oklch(0.55_0.012_210)] border border-[oklch(0.28_0.032_210)]">
            archived
          </span>
        )}
      </div>

      <p className="text-[oklch(0.55_0.012_210)] text-xs leading-relaxed line-clamp-2 flex-1 min-h-[2.5rem]">
        {repo.description ?? "No description"}
      </p>

      <div className="flex items-center justify-between gap-2 mt-auto pt-1 border-t border-[oklch(0.22_0.030_210)]">
        <div className="flex items-center gap-3 text-[oklch(0.52_0.012_210)] text-xs">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span>{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star size={11} />
            <span className="tabular-nums">{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork size={11} />
            <span className="tabular-nums">{repo.forks_count}</span>
          </div>
        </div>
        <span className="text-[oklch(0.42_0.010_210)] text-[11px] tabular-nums shrink-0">
          {formatDate(repo.pushed_at)}
        </span>
      </div>
    </div>
  );
};

export default RepoCard;
