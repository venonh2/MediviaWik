import create from "zustand";
import { FeaturedMenu } from "../types/FeaturedMenu";
import { MenuItem } from "../types/MenuItem";

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

export function filterMenuItems(featuredItems: FeaturedMenu[]) {
  return featuredItems.reduce<MenuItem[]>((newValue, currentValue) => {
    const menuItem = currentValue.items;
    return (newValue = [...newValue, ...menuItem]);
  }, []);
}
