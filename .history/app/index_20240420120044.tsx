import {
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SearchBar } from "@rneui/themed";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonNames();
  }, [loading]);

  const getPokemonNames = async () => {
    (await fetch("https://pokeapi.co/api/v2/pokemon")).json().then((data) => {
      setData(data.results);
    });
    setLoading(false);
  };

  const searchPokemon = (search: string) => {
    router.navigate({
      pathname: "/inspectPokemon",
      params: { search: search },
    });
  };
  return (
    <SafeAreaView className="flex-1 bg-neutral-800 px-3 pt-10">
      <Text className=" font-bInter text-4xl pr-3 text-white pb-5">
        What Pokemon are you looking for?
      </Text>
      <KeyboardAvoidingView className="flex-1items-center justify-center">
        <SearchBar
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="search Pokemon"
        />
        <View className=" flex-row w-full px-4 items-center   border justify-between">
          <TextInput
            placeholder="Search For Pokemon"
            className=" flex-1 py-5 text text-white font-Inter"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={"white"}
          />
          <TouchableOpacity>
            <Ionicons name="search" color={"white"} size={25} />
          </TouchableOpacity>
        </View>
        {search.length > 0 &&
          data.map(
            (data_: string) =>
              data_.name.startsWith(search) && (
                <TouchableOpacity
                  onPress={() => searchPokemon(data_.name)}
                  key={data_.name}
                  className=" bg-white py-5 w-full items-center justify-center"
                >
                  <Text>{data_.name}</Text>
                </TouchableOpacity>
              )
          )}
        <Button onPress={() => searchPokemon(search)} title={"search"} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;
