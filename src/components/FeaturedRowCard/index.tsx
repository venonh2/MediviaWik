import { Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ItemType } from "../../types/MenuItem";
import { useNavigation } from "@react-navigation/native";

type Props = {
  imageUrl: string;
  name: string;
  itemType: ItemType;
};

const GRADIENTS = [
  ["#EB0C0C", "#12B0D2"],
  ["#000000", "#0F0C53"],
  ["#AAAA00", "#000000"],
  ["#0E4F22", "#56E582"],
  ["#000428", "#004e92"],
  ["#2C3E50", "#4CA1AF"],
  ["#0B486B", "#F56217"],
  ["##2196f3", "#f44336"],
  ["#16BFFD", "#CB3066"],
  ["#1D4350", "#A43931"],
  ["#E0EAFC", "#CFDEF3"],
  ["#F1F2B5", "#135058"],
  ["#7b4397", "#dc2430"],
  ["#8e9eab", "#eef2f3"],
  ["#136a8a", "#267871"],
];

export function FeaturedRowCard({ name, imageUrl, itemType }: Props) {
  const navigation = useNavigation();

  const shouldHaveGradient = Math.floor(Math.random() * 46) % 2 === 0;

  return (
    <LinearGradient
      className="bg-white p-[2px] rounded mr-3"
      colors={
        shouldHaveGradient
          ? GRADIENTS[Math.floor(Math.random() * 15)]
          : ["#fafafa", "#fafafa"]
      }
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("VocationScreen")}
        activeOpacity={0.4}
        className="justify-center items-center w-28 h-32 bg-[#fafafa] rounded"
      >
        <Image source={{ uri: imageUrl }} className="mb-4 w-10 h-10" />
        <Text className="font-bold text-sm text-center">{name}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
