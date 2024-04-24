import { View, Text } from "react-native";
import React from "react";
import StyledText from "@/components/styledText";
import { styled } from "nativewind";

const index = () => {
  return (
    <View className="items-center justify-center flex-1">
      <StyledText text={"sad"} />
    </View>
  );
};

export default index;
