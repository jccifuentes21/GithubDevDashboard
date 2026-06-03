const SidebarSkeleton = () => (
  <aside className="w-72 shrink-0 flex flex-col gap-6 py-8 px-6 sticky top-0 h-screen overflow-y-auto border-r border-[oklch(0.26_0.038_210)]">
    <div className="w-24 h-3 rounded-full bg-[oklch(0.22_0.030_210)] animate-pulse" />

    <div className="flex flex-col gap-3">
      <div className="w-20 h-20 rounded-full bg-[oklch(0.22_0.030_210)] animate-pulse" />
      <div className="flex flex-col gap-2">
        <div className="w-36 h-4 rounded-full bg-[oklch(0.22_0.030_210)] animate-pulse" />
        <div className="w-24 h-3 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="w-full h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
        <div className="w-4/5 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
      </div>
    </div>

    <div className="flex gap-4 border-y border-[oklch(0.22_0.030_210)] py-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
          <div className="w-8 h-4 rounded-full bg-[oklch(0.22_0.030_210)] animate-pulse" />
          <div className="w-12 h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse" />
        </div>
      ))}
    </div>

    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-sm bg-[oklch(0.22_0.030_210)] animate-pulse shrink-0" />
          <div
            className="h-2.5 rounded-full bg-[oklch(0.20_0.028_210)] animate-pulse"
            style={{ width: `${[60, 75, 85, 55][i - 1]}%` }}
          />
        </div>
      ))}
    </div>
  </aside>
);

export default SidebarSkeleton;
