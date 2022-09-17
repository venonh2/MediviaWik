import { View, TextInputProps, Image, TextInput } from "react-native";

import Magnify from "../../assets/magnify.png";

export function Search({ ...rest }: TextInputProps) {
  return (
    <View className="flex-row items-center mb-6">
      <View className="flex-row items-center flex-1 space-x-2 bg-[#F0F0F0] p-2 border-2 rounded-md border-[#5B5B5B]">
        <Image source={Magnify} />
        <TextInput
          testID="search-home-input-id"
          keyboardType="default"
          placeholderTextColor="#5B5B5B"
          selectionColor="#5B5B5B"
          maxLength={42}
          keyboardAppearance="dark"
          allowFontScaling={false}
          className="flex-1"
          {...rest}
        />
      </View>
    </View>
  );
}
