import { Dishie } from "../types/Dishie";

export type SharedRouteParam = {
  itemTypeId: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      VocationScreen: SharedRouteParam & {
        name: string;
      };
      WeaponsScreen: SharedRouteParam;
      CitiesScreen: SharedRouteParam;
      CityScreen: SharedRouteParam & {
        name: string;
      };
      MonstersScreen: SharedRouteParam;
    }
  }
}
