import { useEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import { CitiesService } from "../../http/citiesService";
import { useCities } from "../../stores/useCities";
import { CityCard } from "./components/CityCard";

export function CitiesScreen() {
  const { cities, setCities } = useCities();

  useEffect(() => {
    CitiesService.getCities()
      .then((cities) => setCities(cities))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <Text className="mt-4 mb-4 font-bold text-xl">
        Cities/Villages {"&"} small town's
      </Text>
      <ScrollView
        className="divide-y divide-gray-200"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        {cities.map((city, index) => (
          <CityCard key={city._id} index={index} {...city} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
