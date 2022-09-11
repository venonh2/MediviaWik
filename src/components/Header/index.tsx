import { Image, Text, View } from "react-native";

import LightbrinderHelmet from "../../assets/LightbrinderHelmet.png";
import adventurerBackpack from "../../assets/adventurerBackpack.png";

import { RoundedIcon } from "../../components/RoundedIcon";

export function Header() {
  return (
    <View className="flex-row justify-between items-center pb-4 pt-10 px-4 border-b-[1px] border-b-gray-200 mb-2">
      <RoundedIcon className="bg-gray-400">
        <Image className="w-8 h-8" source={LightbrinderHelmet} />
      </RoundedIcon>
      <View className="flex-1 items-start ml-2">
        <Text className="text-2xl font-bold ">Medivia Wiki</Text>
        <Text className="text-xs font-bold ">
          Discovery the Medivia secrets
        </Text>
      </View>
      <RoundedIcon className="bg-yellow-600">
        <Image className="w-8 h-8" source={adventurerBackpack} />
      </RoundedIcon>
    </View>
  );
}
