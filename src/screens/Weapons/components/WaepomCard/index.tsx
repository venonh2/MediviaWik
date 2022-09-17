import { View, Text, Image, TouchableOpacity } from "react-native";
import { OpacityEffectView } from "../../../../components/OpacityEffectView";
import { Weapom } from "../../../../types/Weapom";

type Props = Weapom & { index: number };

export function WaepomCard({
  _id,
  atk,
  def,
  imageUrl,
  name,
  weight,
  index,
}: Props) {
  return (
    <OpacityEffectView key={_id} delay={index === 0 ? 1 : index * 500}>
      <TouchableOpacity className="flex-row items-center h-20 border-b-[1px] border-b-[#f0f0f0] mb-[1px]">
        <Image
          source={{ uri: imageUrl }}
          className="w-16 h-16"
          resizeMode="contain"
        />
        <View className="flex-1 ml-4">
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="font-bold">
            Atk: <Text className="font-semibold">{atk}</Text>
          </Text>
          <Text className="font-bold">
            Def: <Text className="font-semibold">{def}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </OpacityEffectView>
  );
}
