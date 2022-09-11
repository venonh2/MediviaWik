import { Image, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronDoubleRightIcon } from "react-native-heroicons/outline";

import { MenuItem } from "../../types/MenuItem";
import { FeaturedRowCard } from "../FeaturedRowCard";

type Props = {
  title: string;
  imageUrl: string;
  items: MenuItem[];
};

export function FeaturedRow({ title, imageUrl, items }: Props) {
  const navigation = useNavigation();
  const hasListScreen = title.trim().toLowerCase().includes("cities");

  return (
    <>
      <View className="flex-row items-center mb-2">
        <Image
          className="w-6 h-6"
          source={{
            uri: imageUrl,
          }}
        />
        <Text
          onPress={() =>
            hasListScreen ? navigation.navigate("CitiesScreen") : null
          }
          className="ml-2 text-lg font-bold"
        >
          {title}
        </Text>
        {hasListScreen && (
          <ChevronDoubleRightIcon
            onPress={() => navigation.navigate("CitiesScreen")}
            style={{ marginLeft: "auto" }}
            size={20}
            color="#5B5B5B"
          />
        )}
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
