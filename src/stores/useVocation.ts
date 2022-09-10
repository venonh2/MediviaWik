import create from "zustand";
import { Vocation } from "../types/Vocations";

type VocationMenuStore = {
  vocation: Vocation;
  setVocationDetails: (vocation: Vocation) => void;
};

export const useVocation = create<VocationMenuStore>((set) => ({
  vocation: {} as Vocation,
  setVocationDetails: (vocation: Vocation) =>
    set(() => ({
      vocation: vocation,
    })),
}));
