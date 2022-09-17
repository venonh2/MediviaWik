import React from "react";
import { View } from "react-native";
import { FilterPlaceButton } from "../../../../components/FilterPlaceButton";
import { WeaponsFilters } from "../../../../shared/enums/WeaponsFilters";

type Props = {
  handlePressedFilter: (filterType: WeaponsFilters) => void;
  pressedButton: number;
};

export const WeaponsFilter = ({
  pressedButton,
  handlePressedFilter,
}: Props) => {
  return (
    <View className="flex-row justify-between bg-white border-b-[1px] border-gray-200">
      <FilterPlaceButton
        pressed={pressedButton === WeaponsFilters.Atk}
        onPress={() => handlePressedFilter(WeaponsFilters.Atk)}
        title="Atk"
      />
      <FilterPlaceButton
        pressed={pressedButton === WeaponsFilters.Def}
        onPress={() => handlePressedFilter(WeaponsFilters.Def)}
        title="Def"
      />
      <FilterPlaceButton
        pressed={pressedButton === WeaponsFilters.Weight}
        onPress={() => handlePressedFilter(WeaponsFilters.Weight)}
        title="Weight"
      />
      <FilterPlaceButton
        pressed={pressedButton === WeaponsFilters.Properties}
        onPress={() => handlePressedFilter(WeaponsFilters.Properties)}
        title="Properties"
      />
      <FilterPlaceButton
        pressed={pressedButton === WeaponsFilters.Attributes}
        onPress={() => handlePressedFilter(WeaponsFilters.Attributes)}
        title="Attributes"
      />
    </View>
  );
};
