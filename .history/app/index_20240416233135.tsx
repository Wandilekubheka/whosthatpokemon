import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import StyledText from "@/components/styledText";
import { StyledComponent, styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SearchBar } from "@rneui/themed";
import usePokemon from "@/hooks/usePokemon";

const index = () => {
  const [search, setSearch] = useState("");
  const { user, isError, isLoading } = usePokemon("ditto");

  const searchPokemon = () => {
    console.log(user);
  };
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <SafeAreaView className="flex-1 bg-neutral-800 px-3 pt-10">
      <Text className=" font-bInter text-4xl pr-3 text-white pb-5">
        What Pokemon are you looking for?
      </Text>
      <SearchBar
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="search Pokemon"
      />
      <Button onPress={searchPokemon} title={"search"} />
    </SafeAreaView>
  );
};

export default index;
