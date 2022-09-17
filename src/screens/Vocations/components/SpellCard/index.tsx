import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import * as Clipboard from "expo-clipboard";

import { Spell } from "../../../../types/Spells";

import { OpacityEffectView } from "../../../../components/OpacityEffectView";

import ManaFluid from "../../../../assets/ManaFluid.gif";
import GoldCoin from "../../../../assets/GoldCoin.gif";

type Props = Spell & { index: number };

export function SpellCard({
  _id,
  incantation,
  imageUrl,
  magicLevel,
  manaCost,
  name,
  premium,
  price,
  index,
}: Props) {
  const handleCopyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text).then(() => {
      ToastAndroid.show("Incantation copied", ToastAndroid.SHORT);
    });
  };

  return (
    <OpacityEffectView key={_id} delay={index === 0 ? 1 : index * 600}>
      <TouchableOpacity
        onLongPress={() => handleCopyToClipboard(incantation)}
        className="h-20 w-full bg-white flex-row border-b-[1px] border-b-[#f0f0f0] mb-[1px]"
      >
        <Image className="w-20 h-20" source={{ uri: imageUrl }} />
        <View className="flex-1 px-1">
          <View>
            <Text className="font-semibold text-[16px]">{incantation}</Text>
            <Text className="font-bold text-xs opacity-70">{name}</Text>
          </View>
          <View className="flex-row items-center">
            <View className="flex-1">
              <Text className="text-xs opacity-70">ML {magicLevel}</Text>
            </View>
            <View className="flex-1 items-center">
              <Image className="w-6 h-6" source={ManaFluid} />
              <Text>{manaCost}</Text>
            </View>
            <View className="flex-1 items-center">
              <Image className="w-6 h-6" source={GoldCoin} />
              <Text>{price}</Text>
            </View>
            <View className="flex-1 items-center justify-center">
              <Text className="font-bold">{premium ? "yes" : "Free"} </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </OpacityEffectView>
  );
}
