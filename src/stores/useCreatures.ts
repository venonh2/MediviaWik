import create from "zustand";
import { Creature } from "../types/Creature";

type CreaturesStore = {
  creatures: Creature[];
  setCreatures: (creatures: Creature[]) => void;
  creature: Creature;
  setCreature: (city: Creature) => void;
};

export const useCreatures = create<CreaturesStore>((set) => ({
  creatures: [],
  creature: {} as Creature,
  setCreatures: (creatures) =>
    set(() => ({
      creatures: creatures,
    })),
  setCreature: (creature) => set(() => ({ creature: creature })),
}));
