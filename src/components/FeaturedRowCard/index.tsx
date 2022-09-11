import { Text, Image, TouchableOpacity, View } from "react-native";

import { ItemType } from "../../types/MenuItem";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../Gradient";

type Props = {
  imageUrl: string;
  name: string;
  itemType: ItemType;
};

export function FeaturedRowCard({ name, imageUrl, itemType }: Props) {
  const navigation = useNavigation();

  const navigations = {
    weapom: "WeaponsScreen",
    vocation: "VocationScreen",
    city: "CityScreen",
    monster: "MonstersScreen",
  };

  function handleNavigate() {
    navigation.navigate(navigations[itemType.name], {
      itemTypeId: itemType._id,
      name: name,
    });
  }

  return (
    <View className="mr-3">
      <Gradient>
        <TouchableOpacity
          onPress={() => handleNavigate()}
          activeOpacity={0.4}
          className="justify-center items-center w-28 h-32 bg-[#fafafa] rounded"
        >
          <Image source={{ uri: imageUrl }} className="mb-4 w-10 h-10" />
          <Text
            className="font-bold text-sm text-center"
            allowFontScaling={false}
          >
            {name}
          </Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
}
