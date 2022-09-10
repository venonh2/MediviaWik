import { Dishie } from "../types/Dishie";

export type SharedRouteParam = {
  itemTypeId: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      VocationScreen: SharedRouteParam;
      WeaponsScreen: SharedRouteParam;
      CitiesScreen: SharedRouteParam;
      MonstersScreen: SharedRouteParam;
    }
  }
}
