import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

type Props = {};

const InspectPokemon = (props: Props) => {
  const { search } = useLocalSearchParams();
  console.log(search);

  return (
    <View>
      <Text>inspectPokemon</Text>
    </View>
  );
};

export default InspectPokemon;
