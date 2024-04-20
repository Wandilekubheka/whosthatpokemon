import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import usePokemon from "@/hooks/usePokemon";

type Props = {};

const InspectPokemon = (props: Props) => {
  const { search } = useGlobalSearchParams();
  const { user, isError, isLoading } = usePokemon(search);
  console.log(search);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <View>
      <Text>inspectPokemon</Text>
    </View>
  );
};

export default InspectPokemon;
