import { View, Text } from "react-native";
import React from "react";

type Props = {
  text: string;
};

const StyledText = ({ text }: Props) => {
  return (
    <Text className="font-Inter text-gray-800 dark:text-white text-md">
      {text}
    </Text>
  );
};

export default StyledText;
