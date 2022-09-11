import { useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { OpacityEffectView } from "../../components/OpacityEffectView";

import { TextFormatter } from "../../components/TextFormatter";
import { CitiesService } from "../../http/citiesService";
import { useCities } from "../../stores/useCities";

export function CitiesScreen() {
  const navigation = useNavigation();

  const { cities, setCities } = useCities();

  useEffect(() => {
    CitiesService.getCities()
      .then((cities) => setCities(cities))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleNavigate(name: string) {
    navigation.navigate("CityScreen", {
      itemTypeId: "",
      name: name,
    });
  }

  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <Text className="mt-4 mb-4 font-bold text-xl">
        Cities/Villages {"&"} small town's
      </Text>
      <ScrollView
        className="divide-y divide-gray-200"
        showsVerticalScrollIndicator={false}
      >
        {cities.map((city, index) => (
          <OpacityEffectView key={city._id} delay={index * 500}>
            <TouchableOpacity
              onPress={() => handleNavigate(city.name)}
              className="w-100 h-20 flex-row items-center"
            >
              <Image
                source={{
                  uri: city.imageUrl,
                }}
                className="w-20 h-20"
              />
              <View className="ml-2">
                <Text className="font-bold text-lg">{city.name}</Text>
                <TextFormatter
                  className="font-bold text-xs opacity-70"
                  text={city.description}
                  cutTextAt={104}
                  dots
                />
              </View>
            </TouchableOpacity>
          </OpacityEffectView>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
