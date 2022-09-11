import { Image, Text, View, useWindowDimensions } from "react-native";
import Animated, {
  withTiming,
  useAnimatedProps,
  useSharedValue,
  Easing,
} from "react-native-reanimated";

import LightbrinderHelmet from "../../assets/LightbrinderHelmet.png";
import adventurerBackpack from "../../assets/adventurerBackpack.png";

import { RoundedIcon } from "../../components/RoundedIcon";
import { Path, Svg } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function Header() {
  const { width } = useWindowDimensions();

  const widhBackgroundAnimated = useSharedValue(0);

  const backgroundProps = useAnimatedProps(() => {
    return {
      d: `
      M 5 5
      T ${widhBackgroundAnimated.value} 0
      V ${70}
      H 0
      Z 
     `,
    };
  });

  function handleBottomClick() {
    widhBackgroundAnimated.value = withTiming(width, {
      duration: 2000,
      easing: Easing.ease,
    });
  }

  return (
    <Svg onPress={handleBottomClick} width={width} viewBox={`0 0 ${width} 45`}>
      <AnimatedPath animatedProps={backgroundProps} fill={"#f5f5f5"} />
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
    </Svg>
  );
}
