import { Text, Image, TouchableOpacity } from "react-native";

type Props = {
  imageSrc: string;
  name: string;
};

import demon from "../../assets/demon.png";

export function FeaturedRowCard({ name, imageSrc }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      className="justify-center items-center border-2 w-28 h-32 bg-[#F0F0F0] rounded mr-2"
    >
      <Image source={demon} className="mb-6" />
      <Text className="font-bold text-sm">{name}</Text>
    </TouchableOpacity>
  );
}
