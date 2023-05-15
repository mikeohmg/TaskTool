import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../assets/constants/colors";

function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 2,
    borderRadius: 6,
    backgroundColor: Colors.tertiary1,
  },
  pressedItem: {
    opacity: 0.5,
  },
  taskText: {
    padding: 8,
    color: "white",
  },
});
