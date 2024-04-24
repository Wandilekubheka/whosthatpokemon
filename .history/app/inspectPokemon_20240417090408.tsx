import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";
import {
  SearchParams,
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import usePokemon from "@/hooks/usePokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const InspectPokemon = (props: Props) => {
  const { search } = useGlobalSearchParams();
  const { pokemonInfo, isError, isLoading } = usePokemon(search);

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
          headerShown: true,
          headerTitle: search,
          headerTitleStyle: { color: "white" },
          headerTitleAlign: "center",
          headerRight: () =>
            <AntDesign name="heart" size={24} color="rgba(255,255,255,0.3)" />
          ),
          headerStyle: { backgroundColor: "rgb(38,38,38)" },
        }}
      />
    </SafeAreaView>
  );
};

export default InspectPokemon;
