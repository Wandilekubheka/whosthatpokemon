import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
type Props = {
  isVisible: boolean;
  onClose: () => void;
  stats: object[];
};

const Stats = ({ isVisible, onClose, stats }: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className=" h-2/4 bottom-0 absolute w-full  bg-neutral-700 rounded-md">
        <View className="h-16 items-center justify-between flex-row px-5">
          <Text className="text-white font-sInter text-md text-center ">
            Stats
          </Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View className=" items-center justify-evenly flex-1">
          {stats.map((stat) => (
            <View className="flex-1 flex-row justify-between  w-full px-10 ">
              <Text className="text-white font-sInter text-md text-center ">
                {stat.stat.name}
              </Text>
              <View className=" items-center">
                <Progress.Bar
                  color={stat.base_stat / 100 > 0.5 ? "green" : "red"}
                  progress={stat.base_stat / 100}
                  width={200}
                />
                <Text className="text-white font-sInter text-md text-center">
                  {stat.base_stat}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default Stats;
