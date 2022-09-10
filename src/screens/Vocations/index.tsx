import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { MotiView } from "moti";
import { RouteProp, useRoute } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";

import ManaFluid from "../../assets/ManaFluid.gif";
import GoldCoin from "../../assets/GoldCoin.gif";

import { SpellsFilter } from "./components/SpellsFilter";

import { SpellsFilters } from "../../shared/enums/SpellsFilters";
import { VocationService } from "../../http/vocations";
import { useVocation } from "../../stores/useVocation";
import { SharedRouteParam } from "../../global/navigation";

type ParamList = {
  VocationScreen: SharedRouteParam;
};

type ScreenRouteProp = RouteProp<ParamList, "VocationScreen">;

export function VocationScreen() {
  const { params } = useRoute<ScreenRouteProp>();
  const [pressedFilter, setPressedFilter] = useState(SpellsFilters.ML);
  const { vocation, setVocationDetails } = useVocation();

  useEffect(() => {
    VocationService.getVocationDetails(params.itemTypeId)
      .then((res) => {
        setVocationDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { statistics } = vocation;

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text).then(() => {
      ToastAndroid.show("Incantation copied", ToastAndroid.SHORT);
    });
  };

  const handlePressedFilter = (filter: SpellsFilters) =>
    setPressedFilter(filter === pressedFilter ? -1 : filter);

  //#region spells filters

  const OrdenedSpellsByML = useMemo(
    () => vocation?.spells?.sort((a, b) => (a.price > b.price ? 1 : -1)),
    [vocation.spells]
  );

  const OrdenedSpellsByIncantation = useMemo(
    () =>
      vocation?.spells?.sort((a, b) =>
        a.name.length > b.name.length ? 1 : -1
      ),
    [vocation.spells]
  );

  const OrdenedSpellsByManaCost = useMemo(
    () => vocation?.spells?.sort((a, b) => (a.manaCost > b.manaCost ? 1 : -1)),
    [vocation.spells]
  );

  const OrdenedSpellsByPrice = useMemo(
    () => vocation?.spells?.sort((a, b) => (a.price < b.price ? 1 : -1)),
    [vocation.spells]
  );

  const OrdenedSpellsByPremium = useMemo(
    () => vocation?.spells?.sort((a, b) => (a.premium ? 1 : -1)),
    [vocation.spells]
  );

  const spellsFiltered = useMemo(() => {
    switch (pressedFilter) {
      case SpellsFilters.ML:
        return OrdenedSpellsByML;
      case SpellsFilters.Incantation:
        return OrdenedSpellsByIncantation;
      case SpellsFilters.ManaCost:
        return OrdenedSpellsByManaCost;
      case SpellsFilters.Premium:
        return OrdenedSpellsByPrice;
      case SpellsFilters.Price:
        return OrdenedSpellsByPremium;
      default:
        return vocation.spells;
    }
  }, [vocation.spells, pressedFilter]);
  //#endregion filters

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: vocation.backgroundImageUrl }}
        className="flex-1"
      >
        <View className=" flex-1 pt-10">
          <View className="p-2">
            <Text className="text-[#bed5d5] text-3xl font-bold">
              {vocation.name}
            </Text>
            {/* Statistics per level */}
            <View className="mb-2">
              <Text className="text-2xl  text-white mb-2">Statistics</Text>
              <Text className="text-lg font-bold text-white">
                Each level up {vocation.name} gains:
              </Text>
              <Text className="text-sm font-bold text-white">
                * {statistics.healthPoints} health points
              </Text>
              <Text className="text-sm font-bold text-white">
                * {statistics.manaPoints} mana points
              </Text>
              <Text className="text-sm font-bold text-white">
                * {statistics.capacityPoints} oz. capability
              </Text>
            </View>
            {/* Regen Statistics */}
            <View className="mb-2">
              <Text className="text-sm font-bold text-white">
                {statistics.healthRegeneration}
              </Text>
              <Text className="text-sm font-bold text-white">
                {statistics.manaRegeneration}
              </Text>
              <Text className="text-sm font-bold text-white">
                {statistics.promotionRegeneration}
              </Text>
            </View>
            <Text className="text-xl mb-2 font-bold text-white">Spells</Text>
          </View>

          {/* Spells */}
          <SpellsFilter
            pressedButton={pressedFilter}
            handlePressedFilter={handlePressedFilter}
          />
          <View className="bg-white border-b-[1px] border-gray-200 justify-center p-2">
            <Text>
              Total Spells:
              <Text className="font-bold">
                {" "}
                {vocation.spells?.length || 0}{" "}
              </Text>
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="mb-12 divide-y divide-gray-200"
          >
            {vocation?.spells.map((spell, index) => (
              <TouchableOpacity
                key={spell._id}
                onLongPress={() => copyToClipboard(spell.incantation)}
              >
                <MotiView
                  className="h-20 w-full bg-white flex-row"
                  from={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    type: "timing",
                    duration: index === 0 ? 600 : index * 600,
                  }}
                >
                  <Image
                    className="w-20 h-20"
                    source={{ uri: spell.imageUrl }}
                  />
                  <View className="flex-1 px-1">
                    <View>
                      <Text className="font-semibold text-[16px]">
                        {spell.incantation}
                      </Text>
                      <Text className="font-bold text-xs opacity-70">
                        {spell.name}
                      </Text>
                    </View>
                    <View className="flex-row items-center">
                      <View className="flex-1">
                        <Text className="text-xs opacity-70">
                          ML {spell.magicLevel}
                        </Text>
                      </View>
                      <View className="flex-1 items-center">
                        <Image className="w-6 h-6" source={ManaFluid} />
                        <Text>{spell.manaCost}</Text>
                      </View>
                      <View className="flex-1 items-center">
                        <Image className="w-6 h-6" source={GoldCoin} />
                        <Text>{spell.price}</Text>
                      </View>
                      <View className="flex-1 items-center justify-center">
                        <Text className="font-bold">
                          {spell.premium ? "yes" : "Free"}{" "}
                        </Text>
                      </View>
                    </View>
                  </View>
                </MotiView>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}
