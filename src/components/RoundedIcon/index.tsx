import { Image, TouchableOpacity } from "react-native";

type Props = {
  imagePath: string;
  bColor: string;
  bgColor: string;
};

export function RoundedIcon({ bColor, bgColor, imagePath }: Props) {
  return (
    <TouchableOpacity
      className={`rounded-full bg-[#${bgColor}] p-1 border-2 border-[#${bColor}]`}
    >
      <Image className="w-8 h-8" source={imagePath} />
    </TouchableOpacity>
  );
}
