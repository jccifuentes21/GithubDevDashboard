const RepoCardSkeleton = () => (
  <div className="flex flex-col gap-3 p-4 rounded-xl border border-[oklch(0.26_0.038_210)] bg-[oklch(0.18_0.035_210)]">
    <div className="w-2/5 h-3.5 rounded-full bg-[oklch(0.22_0.030_210)] animate-pulse" />
    <div className="flex flex-col gap-1.5 flex-1">
      <div className="w-full h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
      <div className="w-3/4 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
    </div>
    <div className="flex items-center justify-between pt-1 border-t border-[oklch(0.22_0.030_210)]">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.22_0.030_210)] animate-pulse" />
          <div className="w-14 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
        </div>
        <div className="w-8 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
        <div className="w-8 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
      </div>
      <div className="w-16 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
    </div>
  </div>
);

const RepoGridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <RepoCardSkeleton key={i} />
    ))}
  </div>
);

export default RepoGridSkeleton;
