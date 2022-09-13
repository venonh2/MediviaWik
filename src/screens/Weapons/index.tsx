import { View, Text, Image } from "react-native";

import teste from "../../assets/Knife.png";

export function WeaponsScreen() {
  return (
    <View className="pt-10 px-4">
      <View className="flex-row items-center w-100 h-20 border-2">
        <Image source={teste} className="w-10 h-10" />
        <View>
          <View className="flex-row ">
            <Text>Knife</Text>
            <Text>Properties</Text>
            <Text>Weight (oz.)</Text>
          </View>

          <View className="flex-row">
            <Text>atk: 5 || </Text>
            <Text>def: 8</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
