import create from "zustand";
import { FeaturedMenu } from "../types/FeaturedMenu";

type FeaturedMenuStore = {
  featuredItems: FeaturedMenu[];
  setFeaturedItems: (featuredMenus: FeaturedMenu[]) => void;
};

export const useFeaturedMenu = create<FeaturedMenuStore>((set) => ({
  featuredItems: [],
  setFeaturedItems: (featuredMenus: FeaturedMenu[]) =>
    set((state) => ({
      featuredItems: [...state.featuredItems, ...featuredMenus],
    })),
}));
