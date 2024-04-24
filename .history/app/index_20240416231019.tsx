import { View, Text } from "react-native";
import React from "react";
import StyledText from "@/components/styledText";

type Props = {};

const index = (props: Props) => {
  return (
    <View className="items-center justify-center flex-1">
      <StyledText text />
    </View>
  );
};

export default index;
