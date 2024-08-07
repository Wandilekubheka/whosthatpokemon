import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const Stats = ({ isVisible, onClose }: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className=" w-1/3">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Stats</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
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
