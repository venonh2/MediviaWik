import create from "zustand";
import { City } from "../types/City";

type Citiestore = {
  cities: City[];
  setCities: (cities: City[]) => void;
  city: City;
  setCity: (city: City) => void;
};

export const useCities = create<Citiestore>((set) => ({
  cities: [],
  city: {} as City,
  setCities: (cities) =>
    set(() => ({
      cities: cities,
    })),
  setCity: (city) => set(() => ({ city: city })),
}));
