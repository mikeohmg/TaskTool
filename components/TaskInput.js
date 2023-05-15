import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";
import Colors from "../assets/constants/colors";
import PrimaryButton from "./ui/PrimaryButton";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Input New Baby Activity"
            onChangeText={taskInputHandler}
            value={enteredTaskText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={addTaskHandler}>Add Task</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={props.onEndTask}>Cancel</PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    borderRadius: 10,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tertiary1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    color: "white",
    borderRadius: 10,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
