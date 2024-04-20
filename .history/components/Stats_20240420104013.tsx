import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";

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
          <Text
            className="text-white font-sInter text-md text-center "
            style={styles.title}
          >
            Stats
          </Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View className=" items-center justify-evenly flex-1">
          {stats.map((stat) => (
            <View className="flex-1 flex-row justify-between  w-full px-10">
              <Text>{stat.stat.name}</Text>
              <Text>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default Stats;
const styles = StyleSheet.create({
  modalContent: {
    height: "30%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
