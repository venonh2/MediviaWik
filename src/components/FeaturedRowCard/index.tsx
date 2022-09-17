import { Text, Image, TouchableOpacity } from "react-native";

import { ItemType } from "../../types/MenuItem";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../Gradient";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  imageUrl: string;
  name: string;
  itemType: ItemType;
};

export function FeaturedRowCard({ name, imageUrl, itemType }: Props) {
  const navigation = useNavigation();

  const offset = useSharedValue({ x: 0, y: 0 });

  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const navigations = {
    weapom: "WeaponsScreen",
    vocation: "VocationScreen",
    city: "CityScreen",
    monster: "CreaturesScreen",
  };

  function handleNavigate() {
    navigation.navigate(navigations[itemType.name], {
      itemTypeId: itemType._id,
      name: name,
    });
  }

  const gesture = Gesture.Pan()
    .activateAfterLongPress(500)
    .onBegin(() => {
      offset.value.x = rotateX.value;
      offset.value.y = rotateY.value;
      rotateX.value = withTiming(0);
    })
    .onUpdate(({ translationX, translationY }) => {
      rotateX.value = offset.value.x + translationX;
      rotateY.value = offset.value.y + translationY;
    })
    .onEnd(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotateY: `${rotateX.value}deg` },
      { rotateX: `${rotateY.value}deg` },
      { perspective: 1500 },
    ],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View className="mr-3" style={animatedStyle}>
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
      </Animated.View>
    </GestureDetector>
  );
}
