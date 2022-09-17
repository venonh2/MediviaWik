import { View, Text, Image, TouchableOpacity } from "react-native";
import { Creature } from "../../../../types/Creature";

export function CreatureCard({ name, exp, hp, imageUrl }: Creature) {
  return (
    <TouchableOpacity className="flex-row items-center h-20 border-b-[1px] border-b-[#f0f0f0] mb-[1px]">
      <Image
        source={{ uri: imageUrl }}
        className="w-16 h-16"
        resizeMode="contain"
      />
      <View className="flex-1 ml-4">
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="font-bold">
          Exp: <Text className="font-semibold">{exp}</Text>
        </Text>
        <Text className="font-bold">
          Hp: <Text className="font-semibold"> {hp}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}
