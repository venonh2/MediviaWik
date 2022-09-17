import { View, Text, Image, TouchableOpacity } from "react-native";
import { OpacityEffectView } from "../../../../components/OpacityEffectView";
import { Creature } from "../../../../types/Creature";

type Props = Creature & {
  index: number;
};

export function CreatureCard({ _id, name, exp, hp, imageUrl, index }: Props) {
  return (
    <OpacityEffectView key={_id} delay={index * 500}>
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
    </OpacityEffectView>
  );
}
