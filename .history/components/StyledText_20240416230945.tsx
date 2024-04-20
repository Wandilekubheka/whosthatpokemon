import { View, Text } from "react-native";
import React from "react";

const StyledText = ({ text: string }) => {
  return (
    <Text className="font-Inter text-gray-800 dark:text-white text-md">
      {text}
    </Text>
  );
};

export default StyledText;
