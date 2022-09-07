import { Text, Image, View, TouchableOpacity } from "react-native";
import { ItemType } from "../../types/MenuItem";
import { useNavigation } from "@react-navigation/native";

type Props = {
  imageUrl: string;
  name: string;
  itemType: ItemType;
};

export function FeaturedRowCard({ name, imageUrl, itemType }: Props) {
  const navigation = useNavigation();

  return (
    <View className="bg-red-200 p-[2px] rounded  mr-3">
      <TouchableOpacity
        onPress={() => navigation.navigate("VocationScreen")}
        activeOpacity={0.4}
        className="justify-center items-center w-28 h-32 bg-[#F0F0F0] rounded"
      >
        <Image source={{ uri: imageUrl }} className="mb-4 w-10 h-10" />
        <Text className="font-bold text-sm text-center">{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
