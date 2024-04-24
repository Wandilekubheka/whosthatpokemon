import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import usePokemon from "@/hooks/usePokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const InspectPokemon = (props: Props) => {
  const { search } = useGlobalSearchParams();
  const { pokemonInfo, isError, isLoading } = usePokemon(search);
  // const imageUrl = pokemonInfo.sprites.front_default;

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    console.log(isError);
    return;
  }

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
        className=" w-1/2 aspect-square"
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1674599003901-7794de153bbe?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    </SafeAreaView>
  );
};

export default InspectPokemon;
