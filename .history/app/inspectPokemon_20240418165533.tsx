import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import usePokemon from "@/hooks/usePokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Image, Svg, SvgUri } from "react-native-svg";
import useAbilities from "@/hooks/useAbilities";

const InspectPokemon = () => {
  const { search } = useGlobalSearchParams();
  const { pokemonInfo, isError, isLoading } = usePokemon(search);
  const { ability, isError, isLoading } = useAbilities(
    pokemonInfo.abilities.url
  );
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    alert(isError);
    router.back();
    return;
  }

  if (pokemonInfo === null && !isError) return null;

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
        className=" h-1/2 items-center justify-center"
        // style={{ backgroundColor: pokemonInfo.game_indices[0].version.name }}
      >
        <SvgUri
          width="100%"
          height="80%"
          uri={pokemonInfo.sprites.other.dream_world.front_default}
        />
      </View>
      <Text className="text-white font-bInter text-4xl text-center mt-10">
        {search}
      </Text>
      <Text></Text>
    </SafeAreaView>
  );
};

export default InspectPokemon;
