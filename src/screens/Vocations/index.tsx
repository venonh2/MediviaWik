import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ImageBackground, Text, View, ScrollView } from "react-native";

import image from "../../assets/as.png";
import { Vocation } from "../../types/Vocations";

const vocation: Vocation = {
  _id: "1212",
  description: "The powerfull mages can use spell with fire and water",
  name: "Mage",
  statistics: {
    capacityPoints: 10,
    healthPoints: 5,
    manaPoints: 30,
    healthRegeneration: "Health regeneration: 1hp per 12 sec Mana",
    manaRegeneration: "regeneration: 1 mana per 3 sec",
    promotionRegeneration: "After Promotion: 1 mana per 2 sec",
  },
  spells: [
    {
      _id: "212",
      imageUrl: "saasassa",
      name: "Light",
      incantation: "Ancreo Lux",
      magicLevel: 0,
      manaCost: 30,
      premium: false,
      price: 30,
    },
  ],
};

export function VocationScreen() {
  useEffect(() => {
    console.log("fetch vocation details");
  }, []);

  const { statistics } = vocation;

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={image} className="flex-1">
        <View className="flex-1 pt-10 px-4">
          <Text className="text-cyan-500 text-3xl">{vocation.name}</Text>
          {/* Statistics per level */}
          <View className="mb-4">
            <Text className="text-white text-xl mb-4">Statistics</Text>
            <Text className="text-white text-xl">
              Each level up {vocation.name} gains:
            </Text>
            <Text className="text-white text-sm">
              * {statistics.healthPoints} health points
            </Text>
            <Text className="text-white text-sm">
              * {statistics.manaPoints} mana points
            </Text>
            <Text className="text-white text-sm ">
              * {statistics.capacityPoints} oz. capability
            </Text>
          </View>
          {/* Regen Statistics */}
          <View className="mb-4">
            <Text className="text-white text-sm">
              {statistics.healthRegeneration}
            </Text>
            <Text className="text-white text-sm">
              {statistics.manaRegeneration}
            </Text>
            <Text className="text-white text-sm">
              {statistics.promotionRegeneration}
            </Text>
          </View>
          {/* Spells */}
          <Text className="text-white text-xl mb-4">Spells</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {vocation.spells.map((spell) => (
              <View
                key={spell._id}
                className="w-full h-16 bg-[#D9D9D9] rounded opacity-60 mb-2"
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}
