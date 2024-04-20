import { Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SearchBar } from "@rneui/themed";
import { router } from "expo-router";

const index = () => {
  const [search, setSearch] = useState("");
  const [names, setNames]: string[] = useState();

  useEffect(() => {
    // getPokemonNames();
  }, []);

  const getPokemonNames = async () => {
    (await fetch("https://pokeapi.co/api/v2/pokemon")).json().then((data) => {
      data.results.map((res: string) => setNames([...names, res]));
    });
  };
  console.log(getPokemonNames());

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
      <Button
        onPress={() =>
          router.navigate({
            pathname: "/inspectPokemon",
            params: { search: search },
          })
        }
        title={"search"}
      />
    </SafeAreaView>
  );
};

export default index;
