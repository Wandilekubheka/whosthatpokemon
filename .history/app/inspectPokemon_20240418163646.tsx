import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import usePokemon from "@/hooks/usePokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Image, Svg, SvgUri } from "react-native-svg";

const InspectPokemon = () => {
  const { search } = useGlobalSearchParams();
  const { pokemonInfo, isError, isLoading } = usePokemon(search);
  const svgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg";
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    alert(isError);
    router.back();
    return;
  }

  if (pokemonInfo === null && !isError) return null;
  console.log(pokemonInfo.sprites.other.dream_world.front_default);

  return (
    <SafeAreaView className="flex-1 bg-neutral-800 px-3 ">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(38,38,38)" },

          headerShown: true,
          headerTintColor: "white",
          headerTitle: search,
          headerTitleStyle: { color: "white" },
          headerTitleAlign: "center",

          headerRight: () => (
            <TouchableOpacity>
              <AntDesign name="heart" size={24} color="rgba(255,255,255,0.3)" />
            </TouchableOpacity>
          ),
        }}
      />
      <View
        className=" h-1/2 rounded-full items-center justify-center"
        style={{ backgroundColor: "red" }}
      >
        <SvgUri width="100%" height="80%" uri={svgUrl} />
      </View>
      <Text className="text-white font-bInter text-4xl text-center mt-10">
        {search}
      </Text>
      <Text></Text>
    </SafeAreaView>
  );
};

export default InspectPokemon;
