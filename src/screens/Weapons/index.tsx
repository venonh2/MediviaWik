import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { Search } from "../../components/Search";
import { SharedRouteParam } from "../../global/navigation";
import { WaepomCard } from "./components/WaepomCard";
import { Weapom } from "../../types/Weapom";
import { useEffect, useState } from "react";
import { WeaponsFilters } from "../../shared/enums/WeaponsFilters";
import { WeaponsFilter } from "./components/WeaponsFilter";
import { FilterPlaceButton } from "../../components/FilterPlaceButton";
import { useWeapons } from "../../stores/useWeapons";
import { WeaponsService } from "../../http/weaponsService";

type ParamList = {
  WeaponsScreen: SharedRouteParam & {
    name: string;
  };
};

type ScreenRouteProp = RouteProp<ParamList, "WeaponsScreen">;

export function WeaponsScreen() {
  const { params } = useRoute<ScreenRouteProp>();
  const { weapons, setWeapons } = useWeapons();

  const [twoHandsFlter, setTwoHandsFilter] = useState<WeaponsFilters>();
  const [pressedFilter, setPressedFilter] = useState<WeaponsFilters>();

  useEffect(() => {
    WeaponsService.fetchWeapons()
      .then((weapons) => setWeapons(weapons))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePressedWeapomType = (filter: WeaponsFilters) =>
    setTwoHandsFilter(filter === twoHandsFlter ? null : filter);

  const handlePressedFilter = (filter: WeaponsFilters) =>
    setPressedFilter(filter === pressedFilter ? null : filter);

  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <Text className="mt-4 mb-4 font-bold text-xl">{params.name}</Text>
      <Search
        placeholder={`Search for ${params.name}`}
        //onChangeText={updateFilterHandler}
      />
      <View className="flex-row justify-between border-b-[1px] border-gray-200">
        <FilterPlaceButton
          pressed={twoHandsFlter === WeaponsFilters.TwoHands}
          onPress={() => handlePressedWeapomType(WeaponsFilters.TwoHands)}
          title="One-Handed"
        />
        <FilterPlaceButton
          pressed={twoHandsFlter === WeaponsFilters.OneHand}
          onPress={() => handlePressedWeapomType(WeaponsFilters.OneHand)}
          title="Two-Handed"
        />
      </View>
      {/* filters */}
      <WeaponsFilter
        pressedButton={pressedFilter}
        handlePressedFilter={handlePressedFilter}
      />
      <View className="bg-white border-b-[1px] border-gray-200 justify-center p-2">
        <Text>
          Total {params.name}:
          <Text className="font-bold"> {weapons?.length || 0} </Text>
        </Text>
      </View>
      <ScrollView
        className="divide-y divide-gray-200"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        {weapons?.map((weapom, index) => (
          <WaepomCard key={weapom._id} {...weapom} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
