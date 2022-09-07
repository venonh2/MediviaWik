import { Image, SafeAreaView, Text, TextInput, View } from "react-native";

import LightbrinderHelmet from "../../assets/LightbrinderHelmet.png";
import adventurerBackpack from "../../assets/adventurerBackpack.png";
import magnify from "../../assets/magnify.png";
import demon from "../../assets/demon.png";

import { RoundedIcon } from "../../components/RoundedIcon";

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-white visible px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center pb-5">
        <RoundedIcon
          imagePath={LightbrinderHelmet}
          bColor="16243A"
          bgColor="6E7887"
        />
        <View className="flex-1 items-start ml-2">
          <Text className="text-2xl font-bold ">Medivia Wiki</Text>
          <Text className="text-xs font-bold ">
            Discovery the Medivia secrets
          </Text>
        </View>
        <RoundedIcon
          imagePath={adventurerBackpack}
          bColor="4E5166"
          bgColor="BE8C35"
        />
      </View>
      <View>
        {/* Search */}
        <View className="flex-row items-center pb-2">
          <View className="flex-row items-center flex-1 space-x-2 bg-[#F0F0F0] p-2 border-2 rounded-md border-[#5B5B5B]">
            <Image source={magnify} />
            <TextInput
              testID="search-home-input-id"
              placeholder="Search for any item, city, quest or outfits"
              keyboardType="default"
              placeholderTextColor="#5B5B5B"
              selectionColor="#5B5B5B"
              maxLength={42}
            />
          </View>
        </View>

        {/* Featured Rows */}
        <View className="pt-8">
          <View className="flex-row items-center">
            <Image source={demon} />
            <Text className="ml-2 text-lg font-bold">Creatures</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
