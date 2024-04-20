import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import usePokemon from "@/hooks/usePokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const InspectPokemon = () => {
  const { search } = useGlobalSearchParams();
  const { pokemonInfo, isError, isLoading } = usePokemon(search);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    console.log(isError);
    return;
  }

  if (pokemonInfo === null) return null;

  return (
    <SafeAreaView className="flex-1 bg-neutral-800 px-3 pt-10">
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
      <Image
        className=" w-full aspect-square"
        source={{
          uri: pokemonInfo.sprites.front_default,
        }}
      />
      <Text className="text-white font-bInter text-4xl text-center">
        Something
      </Text>
    </SafeAreaView>
  );
};

export default InspectPokemon;
