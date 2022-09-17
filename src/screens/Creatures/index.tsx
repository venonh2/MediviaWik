import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, SafeAreaView, ScrollView } from "react-native";
import { SharedRouteParam } from "../../global/navigation";

import { CreaturesService } from "../../http/creaturesService";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useCreatures } from "../../stores/useCreatures";
import { Search } from "../../components/Search";
import { CreatureCard } from "./components/CreatureCard";

type ParamList = {
  CreaturesScreen: SharedRouteParam & {
    name: string;
  };
};

type ScreenRouteProp = RouteProp<ParamList, "CreaturesScreen">;

export function CreaturesScreen() {
  const { params } = useRoute<ScreenRouteProp>();
  const { creatures, setCreatures } = useCreatures();
  const [searchQueryValue, setSearchQueryValue] = useState<string>("");
  const [, startTransition] = useTransition();

  useEffect(() => {
    CreaturesService.fetchCreatures()
      .then((creatures) => setCreatures(creatures))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function updateFilterHandler(value: string) {
    startTransition(() => {
      setSearchQueryValue(value);
    });
  }

  const filteredCreatures = useMemo(
    () =>
      creatures?.filter((creature) => {
        if (searchQueryValue.length < 1) return;
        const hasItem = creature.name
          .trim()
          .toLowerCase()
          .includes(searchQueryValue.trim().toLowerCase());
        if (hasItem) return creature;
      }),
    [searchQueryValue]
  );

  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <Text className="mt-4 mb-4 font-bold text-xl">{params.name}</Text>
      <Search
        placeholder={`Search for ${params.name}`}
        onChangeText={updateFilterHandler}
      />
      <ScrollView
        className="divide-y divide-gray-200"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        {filteredCreatures?.length >= 1 ? (
          <>
            {filteredCreatures?.map((creature) => (
              <CreatureCard key={creature._id} {...creature} />
            ))}
          </>
        ) : (
          <>
            {creatures?.map((creature) => (
              <CreatureCard key={creature._id} {...creature} />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
