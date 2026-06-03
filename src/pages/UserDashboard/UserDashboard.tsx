// import type { GithubRepo, GithubUser } from "../../types/github.types";
// import mockUser from "../../api/mock.user.json";
// import mockRepos from "../../api/mock.repos.json";
import Sidebar from "./Sidebar/Sidebar";
import RepoGrid from "./RepoGrid/RepoGrid";
import { useQuery } from "@tanstack/react-query";
import { fetchRepos, fetchUser } from "@/api/github.client";
import { useParams } from "react-router";
import SidebarSkeleton from "./Sidebar/SidebarSkeleton";
import DashboardError from "./DashboardError";
import RepoGridSkeleton from "./RepoGrid/RepoGridSkeleton";

// TODO: replace with useQuery calls
// const user_mock = mockUser as GithubUser;
// const repos_mock = mockRepos as GithubRepo[];

const UserDashboard = () => {
  const { username } = useParams();

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: () => fetchUser(username!),
    enabled: !!username,
    retry: false,
  });

  const {
    data: reposData,
    isLoading: isReposLoading,
    isError: isReposError,
    error: reposError,
  } = useQuery({
    queryKey: ["repos", username],
    queryFn: () => fetchRepos(username!),
    enabled: !!username,
    retry: false,
  });

  if (isReposError || isUserError)
    return (
      <DashboardError
        username={username}
        message={userError?.message || reposError?.message}
      />
    );

  return (
    <div className="min-h-screen bg-[oklch(0.14_0.045_210)] flex">
      {isUserLoading || !userData ? (
        <SidebarSkeleton />
      ) : (
        <Sidebar user={userData} />
      )}
      <main className="flex-1 overflow-y-auto">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[oklch(0.94_0.005_210)] font-semibold text-lg">
              Repositories
              <span className="ml-2 text-sm font-normal text-[oklch(0.50_0.014_210)]">
                {isReposLoading || !reposData ? "--" : reposData.length}
              </span>
            </h2>
          </div>
          {isReposLoading || !reposData ? (
            <RepoGridSkeleton />
          ) : (
            <RepoGrid repos={reposData} />
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
