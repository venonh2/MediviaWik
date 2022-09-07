import { Image, ScrollView, Text, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { MenuItem } from "../../types/MenuItem";
import { FeaturedRowCard } from "../FeaturedRowCard";

type Props = {
  title: string;
  imageUrl: string;
  items: MenuItem[];
};

export function FeaturedRow({ title, imageUrl, items }: Props) {
  return (
    <>
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row">
          <Image
            className="w-6 h-6"
            source={{
              uri: imageUrl,
            }}
          />
          <Text className="ml-2 text-lg font-bold">{title}</Text>
        </View>
        <ChevronRightIcon size={20} color="#5B5B5B" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4"
      >
        {items.map((item) => (
          <FeaturedRowCard
            key={item._id}
            name={item.name}
            imageUrl={item.imageUrl}
            itemType={item.type}
          />
        ))}
      </ScrollView>
    </>
  );
}
