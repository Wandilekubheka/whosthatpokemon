import { View, Text } from "react-native";
import React from "react";
import StyledText from "@/components/styledText";
import { StyledComponent, styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text className=" font-bInter text-4xl pr-3 text-white ">
        What Pokemon are you looking for?
      </Text>
    </SafeAreaView>
  );
};

export default index;
