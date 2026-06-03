import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface DashboardErrorProps {
  username: string | undefined;
  message?: string;
}

const DashboardError = ({ username, message }: DashboardErrorProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[oklch(0.14_0.045_210)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm px-6">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[oklch(0.94_0.005_210)] font-semibold text-lg">
            User not found
          </span>
          <span className="text-[oklch(0.52_0.018_210)] text-sm">
            <span className="text-[oklch(0.65_0.22_265)]">@{username}</span>{" "}
            {message ?? "doesn't exist or couldn't be reached."}
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-[oklch(0.52_0.018_210)] hover:text-[oklch(0.72_0.22_265)] active:scale-[0.97] transition-[color,transform] duration-150 cursor-pointer"
        >
          <ArrowLeft size={14} />
          Back to search
        </button>
      </div>
    </div>
  );
};

export default DashboardError;
