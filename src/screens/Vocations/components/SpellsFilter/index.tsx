import React from "react";
import { View } from "react-native";
import { SpellsFilters } from "../../../../shared/enums/SpellsFilters";
import { FilterPlaceButton } from "../../../../components/FilterPlaceButton";

type Props = {
  handlePressedFilter: (filterType: SpellsFilters) => void;
  pressedButton: number;
};

export const SpellsFilter = ({ pressedButton, handlePressedFilter }: Props) => {
  return (
    <View className="flex-row mb-8 justify-between">
      <FilterPlaceButton
        pressed={pressedButton === SpellsFilters.ML}
        onPress={() => handlePressedFilter(SpellsFilters.ML)}
        title="ML"
      />
      <FilterPlaceButton
        pressed={pressedButton === SpellsFilters.ManaCost}
        onPress={() => handlePressedFilter(SpellsFilters.ManaCost)}
        title="Mana Cost"
      />
      <FilterPlaceButton
        pressed={pressedButton === SpellsFilters.Incantation}
        onPress={() => handlePressedFilter(SpellsFilters.Incantation)}
        title="Incantation"
      />
      <FilterPlaceButton
        pressed={pressedButton === SpellsFilters.Price}
        onPress={() => handlePressedFilter(SpellsFilters.Price)}
        title="Price"
      />
      <FilterPlaceButton
        pressed={pressedButton === SpellsFilters.Premium}
        onPress={() => handlePressedFilter(SpellsFilters.Premium)}
        title="Premium"
      />
    </View>
  );
};
