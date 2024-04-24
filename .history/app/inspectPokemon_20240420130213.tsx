import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import Stats from "@/components/Stats";
import { StatusBar } from "expo-status-bar";
import * as Progress from "react-native-progress";
import { useLikes } from "@/features/Likes";

const InspectPokemon = () => {
  const { search } = useGlobalSearchParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [stats, setStats] = useState([]);
  const [desc, setDesc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const { pokemon, addPokemon, removePokemon } = useLikes();
  useEffect(() => {
    fetchData();
  }, [loading]);

  const handleLikeButton = (name: string, image: string) => {
    const something = pokemon.filter((item) => item.name === search);

    const pokemon_ = {
      name: name,
      image: image,
    };
    if (pokemon.includes(name)) {
      removePokemon(pokemon_);
    } else {
      addPokemon(pokemon_);
    }
  };

  const fetchData = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((res) => {
      if (res.status !== 200) {
        Alert.alert("Could't find Pokemon");
        router.back();
        return;
      }
      res.json().then((data) => {
        setData(data);
        setStats(data.stats);
        fetch(data.abilities[0].ability.url).then((res) => {
          if (res.status !== 200) {
            router.back();
            return;
          }
          res.json().then((data) => {
            setDesc(data.effect_entries[0].effect);
            setLoading(false);
          });
        });
      });
    });
  };

  if (!loading) {
    return (
      <SafeAreaView className="flex-1 bg-neutral-800 px-3 ">
        <StatusBar style="light" />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "rgb(38,38,38)" },

            headerShown: true,
            headerTintColor: "white",
            headerTitle: search,
            headerTitleStyle: { color: "white" },
            headerTitleAlign: "center",

            headerRight: () => (
              <TouchableOpacity
                className=" p-3"
                onPress={() => {
                  handleLikeButton(
                    search,
                    data.sprites.other.dream_world.front_default
                  );
                }}
              >
                <AntDesign
                  name="heart"
                  size={24}
                  color={
                    pokemon.filter((item) => item.name === search).length !== 0
                      ? "red"
                      : "rgba(255,255,255,0.3)"
                  }
                />
              </TouchableOpacity>
            ),
          }}
        />
        <View
          className=" h-1/2 items-center justify-center"
          // style={{ backgroundColor: pokemonInfo.game_indices[0].version.name }}
        >
          <SvgUri
            width="100%"
            height="80%"
            uri={data.sprites.other.dream_world.front_default}
          />
        </View>
        <Text className="text-white font-bInter text-4xl text-center mt-10">
          {search}
        </Text>
        {!showModal ? (
          <>
            <Text className="text-white font-sInter text-md text-center mt-10">
              {desc}
            </Text>
            <View className="flex-1 items-center justify-center">
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Text className="p-5 text-red-600 font-sInter text-xl text-center">
                  Stats
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Stats
            stats={stats}
            isVisible={showModal}
            onClose={() => setShowModal(!showModal)}
          />
        )}
      </SafeAreaView>
    );
  }
  return (
    <Progress.Circle
      className="flex-1 items-center justify-center"
      size={50}
      indeterminate={true}
    />
  );
};

export default InspectPokemon;
