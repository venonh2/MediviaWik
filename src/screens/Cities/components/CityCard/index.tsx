import { TouchableOpacity, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { OpacityEffectView } from "../../../../components/OpacityEffectView";
import { City } from "../../../../types/City";
import { TextFormatter } from "../../../../components/TextFormatter";

type Props = City & { index: number };

export function CityCard({ _id, name, description, imageUrl, index }: Props) {
  const navigation = useNavigation();

  function handleNavigate(name: string) {
    navigation.navigate("CityScreen", {
      itemTypeId: "",
      name: name,
    });
  }

  return (
    <OpacityEffectView key={_id} delay={index * 500}>
      <TouchableOpacity
        onPress={() => handleNavigate(name)}
        className="w-100 h-20 flex-row items-center border-b-[1px] border-b-[#f0f0f0] mb-[1px]"
      >
        <Image
          source={{
            uri: imageUrl,
          }}
          className="w-20 h-20"
        />
        <View className="ml-2">
          <Text className="font-bold text-lg">{name}</Text>
          <TextFormatter
            className="font-bold text-xs opacity-70"
            text={description}
            cutTextAt={104}
            dots
          />
        </View>
      </TouchableOpacity>
    </OpacityEffectView>
  );
}
