import { View, Text } from "react-native";
import React, { useState } from "react";
import StyledText from "@/components/styledText";
import { StyledComponent, styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";

const index = () => {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-neutral-800 px-3 pt-10">
      <Text className=" font-bInter text-4xl pr-3 text-white pb-5">
        What Pokemon are you looking for?
      </Text>
      <SearchBar onChangeText={setSearch} placeholder="search Pokemon" />
    </SafeAreaView>
  );
};

export default index;