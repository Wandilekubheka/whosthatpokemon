import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as Progress from "react-native-progress";

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
    setSearch("");
  };
  if (loading) {
    return (
      <Progress.Circle
        className="flex-1 items-center justify-center"
        size={50}
        indeterminate={true}
      />
    );
  }
  return (
    <KeyboardAvoidingView className="flex-1 items-center justify-center bg-neutral-800 px-3 pt-10">
      <StatusBar style="light" />

      <Text className=" font-bInter text-4xl pr-3 text-white pb-5">
        What Pokemon are you looking for?
      </Text>
      <View className=" flex-row w-full px-4 items-center border-white border justify-between">
        <TextInput
          placeholder="Search For Pokemon"
          className=" flex-1 py-5 text text-white font-Inter"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={"white"}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => searchPokemon(search)}>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        )}
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
    </KeyboardAvoidingView>
  );
};

export default index;
