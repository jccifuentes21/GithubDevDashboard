import { ArrowLeft, Building2, Link, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router";
import type { GithubUser } from "../../../types/github.types";

interface SidebarProps {
  user: GithubUser;
}

const Sidebar = ({ user }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className="w-72 shrink-0 flex flex-col gap-6 py-8 px-6 sticky top-0 h-screen overflow-y-auto border-r border-[oklch(0.26_0.038_210)]">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-xs text-[oklch(0.52_0.018_210)] hover:text-[oklch(0.72_0.22_265)] active:scale-[0.97] transition-[color,transform] duration-150 w-fit cursor-pointer"
      >
        <ArrowLeft size={13} />
        Back to search
      </button>

      <div className="flex flex-col gap-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full ring-2 ring-[oklch(0.26_0.038_210)]"
        />
        <div className="flex flex-col gap-0.5">
          {user.name && (
            <span className="text-[oklch(0.94_0.005_210)] font-semibold text-lg leading-tight">
              {user.name}
            </span>
          )}
          <span className="text-[oklch(0.52_0.018_210)] text-sm">
            @{user.login}
          </span>
        </div>
        {user.bio && (
          <p className="text-[oklch(0.64_0.012_210)] text-sm leading-relaxed line-clamp-3">
            {user.bio}
          </p>
        )}
      </div>

      <div className="flex gap-4 text-sm border-y border-[oklch(0.22_0.030_210)] py-4">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[oklch(0.94_0.005_210)] font-semibold tabular-nums">
            {user.public_repos}
          </span>
          <span className="text-[oklch(0.50_0.014_210)] text-xs">Repos</span>
        </div>
        <div className="w-px bg-[oklch(0.22_0.030_210)]" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[oklch(0.94_0.005_210)] font-semibold tabular-nums">
            {user.followers}
          </span>
          <span className="text-[oklch(0.50_0.014_210)] text-xs">
            Followers
          </span>
        </div>
        <div className="w-px bg-[oklch(0.22_0.030_210)]" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[oklch(0.94_0.005_210)] font-semibold tabular-nums">
            {user.following}
          </span>
          <span className="text-[oklch(0.50_0.014_210)] text-xs">
            Following
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 text-sm">
        {user.company && (
          <div className="flex items-center gap-2 text-[oklch(0.60_0.012_210)]">
            <Building2
              size={14}
              className="shrink-0 text-[oklch(0.48_0.018_210)]"
            />
            <span className="truncate">{user.company}</span>
          </div>
        )}
        {user.location && (
          <div className="flex items-center gap-2 text-[oklch(0.60_0.012_210)]">
            <MapPin
              size={14}
              className="shrink-0 text-[oklch(0.48_0.018_210)]"
            />
            <span className="truncate">{user.location}</span>
          </div>
        )}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[oklch(0.65_0.22_265)] hover:text-[oklch(0.72_0.22_265)] transition-colors duration-150"
        >
          <Link size={14} className="shrink-0" />
          <span className="truncate">github.com/{user.login}</span>
        </a>
        <div className="flex items-center gap-2 text-[oklch(0.60_0.012_210)]">
          <Users size={14} className="shrink-0 text-[oklch(0.48_0.018_210)]" />
          <span>Member since {new Date(user.created_at).getFullYear()}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
