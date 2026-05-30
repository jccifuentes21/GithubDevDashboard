import type { GithubRepo, GithubUser } from "../../types/github.types";
import mockUser from "../../api/mock.user.json";
import mockRepos from "../../api/mock.repos.json";
import Sidebar from "./Sidebar/Sidebar";
import RepoGrid from "./RepoGrid/RepoGrid";

// TODO: replace with useQuery calls
const user = mockUser as GithubUser;
const repos = mockRepos as GithubRepo[];

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-[oklch(0.14_0.045_210)] flex">
      <Sidebar user={user} />
      <main className="flex-1 overflow-y-auto">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[oklch(0.94_0.005_210)] font-semibold text-lg">
              Repositories
              <span className="ml-2 text-sm font-normal text-[oklch(0.50_0.014_210)]">
                {repos.length}
              </span>
            </h2>
          </div>
          <RepoGrid repos={repos} />
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
