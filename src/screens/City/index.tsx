import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import cityImage from "../../assets/cityImage.png";
import { RoundedIcon } from "../../components/RoundedIcon";

import Scroll from "../../assets/Scroll.png";
import Npcs from "../../assets/Npcs.png";

type Npc = {
  _id: string;
  name: string;
  imageUrl: string;
  occupation: string;
};

type City = {
  _id: string;
  name: string;
  description: string;
  npcs: Npc[];
};

const city: City = {
  _id: "323224",
  description: `Dynahall is a small community to the east of Eschen. It is surrounded by a river to the south and west and the Mittenhoff mountain range to the east. It's very quiet and safe at the surface with only a small number of lesser creatures inhabiting the surrounding area. You can sail there by boat from the Eschen lighthouse after completing mission 5 of the Imperial Faction. The town is also home to an underground hideout of renegades.`,
  name: "Thoris",
  npcs: [
    {
      _id: "233424",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
    {
      _id: "5232323",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
    {
      _id: "4343",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
    {
      _id: "4343453",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
    {
      _id: "333232",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
    {
      _id: "334343",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
    {
      _id: "12212",
      occupation: "Mage Spell Teacher",
      imageUrl: "http://teste.jpg",
      name: "Jakob",
    },
  ],
};

export function CityScreen() {
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
          {city.npcs.map((item) => (
            <View className="h-16 flex-row items-center">
              <Image source={Scroll} className="h-16 w-16" />
              <TouchableOpacity key={item._id}>
                <Text className="font-bold text-lg">{item.name}</Text>
                <Text className="font-bold text-xs opacity-60">
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
