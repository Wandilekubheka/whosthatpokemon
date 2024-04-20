import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import usePokemon from "@/hooks/usePokemon";

type Props = {};

const InspectPokemon = (props: Props) => {
  const { search }: string = useGlobalSearchParams();
  const { user, isError, isLoading } = usePokemon(search);

  console.log(search);

  return (
    <View>
      <Text>inspectPokemon</Text>
    </View>
  );
};

export default InspectPokemon;
