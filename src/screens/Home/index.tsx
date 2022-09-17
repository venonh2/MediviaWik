import { SafeAreaView, ScrollView, Text } from "react-native";

import { FeaturedRow } from "../../components/FeaturedRow";
import { useEffect, useMemo, useState, useTransition } from "react";
import { MenuService } from "../../http/menuService";
import { filterMenuItems, useFeaturedMenu } from "../../stores/useFeaturedMenu";
import { FeaturedRowCard } from "../../components/FeaturedRowCard";
import { MotiView } from "moti";
import { Search } from "../../components/Search";

export function HomeScreen() {
  const { featuredItems, setFeaturedItems } = useFeaturedMenu();
  const [searchQueryValue, setSearchQueryValue] = useState<string>("");
  const [, startTransition] = useTransition();

  const menuItems = filterMenuItems(featuredItems);

  const filteredMenuItems = useMemo(
    () =>
      menuItems.filter((menuItem) => {
        if (searchQueryValue.length < 1) return;
        const hasItem = menuItem.name
          .trim()
          .toLowerCase()
          .includes(searchQueryValue.trim().toLowerCase());
        if (hasItem) return menuItem;
      }),
    [searchQueryValue]
  );

  function updateFilterHandler(value: string) {
    startTransition(() => {
      setSearchQueryValue(value);
    });
  }

  useEffect(() => {
    MenuService.fetchFeaturedItems()
      .then((res) => setFeaturedItems(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white visible px-4">
      {/* Search */}
      <Search
        placeholder="Search for any item, city, quest or outfits"
        onChangeText={updateFilterHandler}
      />
      {/* Searched Item Card */}
      {filteredMenuItems?.length >= 1 ? (
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
          className="w-100 mb-4"
        >
          <Text className="mb-4 font-bold ml-2 text-lg">
            Results that we found !!
          </Text>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {filteredMenuItems.map((menuItem) => (
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
