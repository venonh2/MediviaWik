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
import { useDeferredValue, useEffect, useState } from "react";
import { MenuService } from "../../http/menuService";
import { useFeaturedMenu } from "../../stores/useFeaturedMenu";
import { MenuItem } from "../../types/MenuItem";
import { FeaturedRowCard } from "../../components/FeaturedRowCard";
import { MotiView } from "moti";

export function HomeScreen() {
  const { featuredItems, setFeaturedItems } = useFeaturedMenu();
  const [searchQueryValue, setSearchQueryValue] = useState<string>("");
  const deferredQuery = useDeferredValue(searchQueryValue);

  const menuItems = featuredItems.reduce<MenuItem[]>(
    (newValue, currentValue) => {
      const menuItem = currentValue.items;
      return (newValue = [...newValue, ...menuItem]);
    },
    []
  );

  const searchedMenuItems = menuItems.filter((menuItem) => {
    if (deferredQuery.length < 1) return;
    const hasItem = menuItem.name
      .trim()
      .toLowerCase()
      .includes(deferredQuery.trim().toLowerCase());
    if (hasItem) return menuItem;
  });

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
      <View className="flex-row items-center mb-6">
        <View className="flex-row items-center flex-1 space-x-2 bg-[#F0F0F0] p-2 border-2 rounded-md border-[#5B5B5B]">
          <Image source={magnify} />
          <TextInput
            testID="search-home-input-id"
            placeholder="Search for any item, city, quest or outfits"
            keyboardType="default"
            placeholderTextColor="#5B5B5B"
            selectionColor="#5B5B5B"
            maxLength={42}
            onChangeText={setSearchQueryValue}
          />
        </View>
      </View>
      {/* Searched Item Card */}
      {searchedMenuItems?.length >= 1 ? (
        <MotiView
          from={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0.5,
            scale: 0.9,
          }}
          className="w-100 mb-4 "
        >
          <Text className="mb-4 font-bold ml-2 text-lg">
            Results that we found !!
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {searchedMenuItems.map((menuItem) => (
              <FeaturedRowCard
                key={menuItem._id}
                name={menuItem.name}
                imageUrl={menuItem.imageUrl}
                itemType={menuItem.type}
              />
            ))}
          </ScrollView>
        </MotiView>
      ) : (
        <>
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
        </>
      )}
    </SafeAreaView>
  );
}
