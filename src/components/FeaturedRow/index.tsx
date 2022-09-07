import { Image, ScrollView, Text, View } from "react-native";
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
      <View className="flex-row items-center  mb-2">
        <Image
          className="w-6 h-6"
          source={{
            uri: imageUrl,
          }}
        />
        <Text className="ml-2 text-lg font-bold">{title}</Text>
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
