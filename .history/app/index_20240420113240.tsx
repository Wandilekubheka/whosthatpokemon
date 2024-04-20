import { Text, ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SearchBar } from "@rneui/themed";
import { router } from "expo-router";

const index = () => {
  const [search, setSearch] = useState("");
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonNames();
  }, [loading]);

  const getPokemonNames = async () => {
    (await fetch("https://pokeapi.co/api/v2/pokemon")).json().then((data) => {
      data.results.map((res: string) => {
        setNames([...names, res.name]);
      });
    });
    // setLoading(false);
  };

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
      {search.length > 0 &&
        names.map(
          (name: string) =>
            name.startsWith(search) && (
              <View className=" bg-white py-5 w-full items-center justify-center">
                <Text>{name}</Text>
              </View>
            )
        )}
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
