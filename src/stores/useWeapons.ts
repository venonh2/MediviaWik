import create from "zustand";
import { Weapom } from "../types/Weapom";

type WeaponsStore = {
  weapons: Weapom[];
  setWeapons: (weapons: Weapom[]) => void;
  weapon: Weapom;
  setWeapon: (city: Weapom) => void;
};

export const useWeapons = create<WeaponsStore>((set) => ({
  weapons: [],
  weapon: {} as Weapom,
  setWeapons: (weapons) =>
    set(() => ({
      weapons: weapons,
    })),
  setWeapon: (weapon) => set(() => ({ weapon: weapon })),
}));
