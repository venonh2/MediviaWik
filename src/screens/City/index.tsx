import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import cityImage from "../../assets/cityImage.png";
import { RoundedIcon } from "../../components/RoundedIcon";

import Scroll from "../../assets/Scroll.png";
import Npcs from "../../assets/Npcs.png";
import { MotiView } from "moti";
import { useEffect } from "react";
import { CitiesService } from "../../http/citiesService";
import { SharedRouteParam } from "../../global/navigation";
import { useCities } from "../../stores/useCities";

type ParamList = {
  CityScreen: SharedRouteParam & {
    name: string;
  };
};

type ScreenRouteProp = RouteProp<ParamList, "CityScreen">;

export function CityScreen() {
  const { params } = useRoute<ScreenRouteProp>();

  const { city, setCity } = useCities();

  useEffect(() => {
    CitiesService.getCityDetails(params.name)
      .then((city) => {
        setCity(city);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="light" translucent />
      <Image source={cityImage} className="mb-4" />
      {/* city info */}
      <View className="px-4 flex-1 mb-16">
        <View className="flex-row items-center mb-2">
          <RoundedIcon className="bg-[#FFF09E]">
            <Image className="w-8 h-8" source={Scroll} />
          </RoundedIcon>
          <Text className="font-bold text-xl ml-2">{city.name}</Text>
        </View>
        <Text className="mb-4">{city.description}</Text>
        <View className="flex-row items-center mb-4">
          <RoundedIcon className="bg-[#A95A26] border-[#555555]">
            <Image className="w-8 h-8" source={Npcs} />
          </RoundedIcon>
          <Text className="font-bold text-xl ml-2">{city.name} NPC's</Text>
        </View>
        <ScrollView
          className="divide-y divide-gray-200"
          showsVerticalScrollIndicator={false}
        >
          {!city?.npcs && (
            <Text className="text-lg text-center">
              looks like that
              <Text className="font-bold"> {city.name} </Text>
              has no citizens
            </Text>
          )}
          {city?.npcs?.map((npc, index) => (
            <TouchableOpacity key={npc._id}>
              <MotiView
                from={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  type: "timing",
                  duration: index === 0 ? 600 : index * 600,
                }}
                className="h-16 flex-row items-center"
              >
                <Image source={{ uri: npc.imageUrl }} className="h-16 w-16" />
                <View>
                  <Text className="font-bold text-lg">{npc.name}</Text>
                  <Text className="font-bold text-xs opacity-60">
                    {npc.occupation}
                  </Text>
                </View>
              </MotiView>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
