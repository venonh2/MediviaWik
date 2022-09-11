import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import Sheol from "../../assets/Death.png";

export function CustomFallback(props: { error: Error; resetError: Function }) {
  return (
    <ImageBackground source={Sheol} className="flex-1">
      <View className="pt-10 px-4 flex-1">
        <Text className="font-semibold text-xl text-white mt-20 mb-8">
          Sorry, brave!
        </Text>
        <Text className="font-semibold text-sm text-white mb-80">
          We're not strong enough and the world has succumbed. But the gods gave
          us a new opportunity to not repeat the same mistakes.
        </Text>
        <LinearGradient
          colors={["#F05005", "#720200"]}
          className="w-100 h-12 rounded "
        >
          <TouchableOpacity
            className="flex-1 items-center justify-center"
            onPress={() => props.resetError}
          >
            <Text className="text-xl text-white">Try again.</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
}
