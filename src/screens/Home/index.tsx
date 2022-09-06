import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function RoundedIcon() {
  return (
    <TouchableOpacity className="w-8 h-8 rounded-full">
      <Image
        className="w-8 h-8 bg-red-100"
        source={{
          uri: "../../assets/lightbrinderHelmet.png",
        }}
      />
    </TouchableOpacity>
  );
}

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-white visible px-4">
      <View className="flex-row justify-between items-center">
        <RoundedIcon />
        <View className="flex-1 items-start ml-2">
          <Text className="text-2xl font-bold ">Medivia Wiki</Text>
          <Text className="text-xs font-bold ">
            Discovery the Medivia secrets
          </Text>
        </View>
        <View className="w-8 h-8 rounded-full bg-red-400"></View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}
