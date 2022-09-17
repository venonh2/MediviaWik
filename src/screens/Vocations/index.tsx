import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { ImageBackground, Text, View, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { SpellsFilter } from "./components/SpellsFilter";

import { SpellsFilters } from "../../shared/enums/SpellsFilters";
import { VocationService } from "../../http/vocations";
import { useVocation } from "../../stores/useVocation";
import { SharedRouteParam } from "../../global/navigation";
import { SpellCard } from "./components/SpellCard";

type ParamList = {
  VocationScreen: SharedRouteParam & {
    name: string;
  };
};

type ScreenRouteProp = RouteProp<ParamList, "VocationScreen">;

enum RequestStatus {
  Fetching,
  Error,
  Success,
}

export function VocationScreen() {
  const { params } = useRoute<ScreenRouteProp>();
  const { vocation, setVocationDetails } = useVocation();

  const [pressedFilter, setPressedFilter] = useState(SpellsFilters.ML);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.Fetching);

  useEffect(() => {
    VocationService.getVocationDetails(params.itemTypeId, params.name)
      .then((details) => {
        setRequestStatus(RequestStatus.Success);
        setVocationDetails(details);
      })
      .catch((err) => {
        setRequestStatus(RequestStatus.Error);
      });
  }, []);

  const { statistics } = vocation;

  //#region handlers

  const handlePressedFilter = (filter: SpellsFilters) =>
    setPressedFilter(filter === pressedFilter ? -1 : filter);

  //#endregion handlers

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

  const filteredSpells = useMemo(() => {
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

  if (requestStatus === RequestStatus.Fetching)
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );

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
                * {statistics?.healthPoints} health points
              </Text>
              <Text className="text-sm font-bold text-white">
                * {statistics?.manaPoints} mana points
              </Text>
              <Text className="text-sm font-bold text-white">
                * {statistics?.capacityPoints} oz. capability
              </Text>
            </View>
            {/* Regen Statistics */}
            <View className="mb-2">
              <Text className="text-sm font-bold text-white">
                {statistics?.healthRegeneration}
              </Text>
              <Text className="text-sm font-bold text-white">
                {statistics?.manaRegeneration}
              </Text>
              <Text className="text-sm font-bold text-white">
                {statistics?.promotionRegeneration}
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
            {filteredSpells?.map((spell, index) => (
              <SpellCard key={spell._id} {...spell} index={index} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}
