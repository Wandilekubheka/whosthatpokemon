import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";

const InspectPokemon = () => {
  const { search } = useGlobalSearchParams();
  // const { pokemonInfo, isError, isLoading, desc } = usePokemon(search);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [stats, setStats] = useState({});
  const [desc, setDesc] = useState({});
  useEffect(() => {
    fetchData();
  }, [loading]);

  const fetchData = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((res) => {
      if (res.status !== 200) {
        router.back();
        return;
      }
      res.json().then((data) => {
        setData(data);
        fetch(data.abilities[0].ability.url).then((res) => {
          if (res.status !== 200) {
            router.back();
            return;
          }
          res.json().then((data) => {
            console.log(data);
            setDesc(data.effect_entries[0].effect);
          });
        });

        setLoading(false);
      });
    });
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  console.log();

  // if (pokemonInfo === null && !isError) return null;

  return (
    <SafeAreaView className="flex-1 bg-neutral-800 px-3 ">
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
      <View
        className=" h-1/2 items-center justify-center"
        // style={{ backgroundColor: pokemonInfo.game_indices[0].version.name }}
      >
        {/* <SvgUri
          width="100%"
          height="80%"
          // uri={pokemonInfo.sprites.other.dream_world.front_default}
        /> */}
      </View>
      <Text className="text-white font-bInter text-4xl text-center mt-10">
        {search}
      </Text>
      <Text></Text>
    </SafeAreaView>
  );
};

export default InspectPokemon;
