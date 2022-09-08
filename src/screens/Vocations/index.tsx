import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MotiView } from "moti";

import Background from "../../assets/as.png";
import Demon from "../../assets/demon.png";

import { Vocation } from "../../types/Vocations";
import { SpellsFilter } from "./components/SpellsFilter";

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
    {
      _id: "2142",
      imageUrl: "saasassa",
      name: "Light",
      incantation: "Ancreo Lux",
      magicLevel: 0,
      manaCost: 30,
      premium: false,
      price: 30,
    },
    {
      _id: "2212",
      imageUrl: "saasassa",
      name: "Light",
      incantation: "Ancreo Lux",
      magicLevel: 0,
      manaCost: 30,
      premium: false,
      price: 30,
    },
    {
      _id: "27412",
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
      <ImageBackground source={Background} className="flex-1">
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
            {/* filters */}
            <SpellsFilter
              pressedButton={1}
              handlePressedFilter={() => console.log("asasas")}
            />
            {vocation.spells.map((spell, index) => (
              <TouchableOpacity key={spell._id}>
                <MotiView
                  className="h-16 w-full bg-[#D9D9D9] rounded opacity-80 mb-2 items-center flex-row"
                  animate={{
                    transform: [
                      {
                        scaleX: [
                          0,
                          { value: 0.5, delay: 150 * index },
                          { value: 1, delay: 220 * index },
                        ],
                      },
                    ],
                  }}
                >
                  <Image source={Demon} />
                  <View>
                    <Text>{spell.incantation}</Text>
                    <Text>{spell.name}</Text>
                  </View>
                </MotiView>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}
