import { create } from "zustand";
import { persist } from "zustand/middleware";

type SortDirection = "asc" | "desc";

type SortType = "name" | "stars" | "last-updated";

type FilterType = "All" | "Source" | "Forked";

type Themes = "light" | "dark";
//Define types for state and actions
interface StoreType {
  username: string;
  sortType: SortType;
  sortDirection: SortDirection;
  filter: FilterType;
  language: string | null;
  theme: Themes;
  setUsername: (username: string) => void;
  setSortType: (type: SortType) => void;
  setSortDirection: (direction: SortDirection) => void;
  setFilter: (filter: FilterType) => void;
  setLanguage: (language: string | null) => void;
  setTheme: (theme: Themes) => void;
}

const useStore = create<StoreType>()(
  persist(
    (set) => ({
      username: "",
      sortType: "name",
      sortDirection: "asc",
      filter: "All",
      language: null,
      theme: "dark",
      setUsername: (username: string) => set(() => ({ username })),
      setSortType: (sortType: SortType) => set(() => ({ sortType })),
      setSortDirection: (sortDirection: SortDirection) =>
        set(() => ({ sortDirection })),
      setFilter: (filter: FilterType) => set(() => ({ filter })),
      setLanguage: (language: string | null) => set(() => ({ language })),
      setTheme: (theme: Themes) => set(() => ({ theme })),
    }),
    {
      name: "app-storage",
    },
  ),
);

export default useStore;
