import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import LightbrinderHelmet from "../../assets/LightbrinderHelmet.png";
import adventurerBackpack from "../../assets/adventurerBackpack.png";
import magnify from "../../assets/magnify.png";

import { RoundedIcon } from "../../components/RoundedIcon";
import { FeaturedRow } from "../../components/FeaturedRow";
import { useEffect } from "react";
import { MenuService } from "../../http/menu/menuService";
import { useFeaturedMenu } from "../../stores/useFeaturedMenu";

type Props = {
  title: string;
  id: string;
  items: Item[];
};

type Item = {
  imageSrc: string;
  name: string;
};

const ITEMS: Props[] = [
  {
    title: "Creatures",
    id: "asasddsa",
    items: [
      { name: "Monsters", imageSrc: "http://teste" },
      { name: "Bosses", imageSrc: "http://teste" },
      { name: "Bosses", imageSrc: "http://teste" },
      { name: "Bosses", imageSrc: "http://teste" },
    ],
  },
  {
    title: "Waepons",
    id: "bdfsdf",
    items: [{ name: "Monsters", imageSrc: "http://teste" }],
  },
  {
    title: "Cities/Villages",
    id: "asasd121dsa",
    items: [{ name: "Bosses", imageSrc: "http://teste" }],
  },
];

export function HomeScreen() {
  const { featuredItems, setFeaturedItems } = useFeaturedMenu();

  useEffect(() => {
    MenuService.fetchFeaturedItems()
      .then((res) => setFeaturedItems(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView className="flex-1 pt-10 bg-white visible px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center pb-4">
        <RoundedIcon className="bg-gray-400">
          <Image className="w-8 h-8" source={LightbrinderHelmet} />
        </RoundedIcon>
        <View className="flex-1 items-start ml-2">
          <Text className="text-2xl font-bold ">Medivia Wiki</Text>
          <Text className="text-xs font-bold ">
            Discovery the Medivia secrets
          </Text>
        </View>
        <RoundedIcon className="bg-yellow-600">
          <Image className="w-8 h-8" source={adventurerBackpack} />
        </RoundedIcon>
      </View>
      {/* Search */}
      <View>
        <View className="flex-row items-center pb-8">
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
      </View>
      {/* Featured Rows */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {featuredItems.map((item) => (
          <FeaturedRow
            key={item._id}
            title={item.name}
            imageUrl={item.imageUrl}
            items={item.items}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
