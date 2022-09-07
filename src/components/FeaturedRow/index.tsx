import { Image, ScrollView, Text, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import demon from "../../assets/demon.png";
import { FeaturedRowCard } from "../FeaturedRowCard";

type Item = {
  imageSrc: string;
  name: string;
};

type Props = {
  title: string;
  items: Item[];
};

export function FeaturedRow({ title, items }: Props) {
  return (
    <>
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row">
          <Image source={demon} />
          <Text className="ml-2 text-lg font-bold">{title}</Text>
        </View>
        <ChevronRightIcon size={20} color="#5B5B5B" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-6"
      >
        {items.map((item) => (
          <FeaturedRowCard name={item.name} imageSrc={item.imageSrc} />
        ))}
      </ScrollView>
    </>
  );
}
