import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import GoalItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "./components/ui/PrimaryButton";
import Colors from "./assets/constants/colors";

export default function App() {
  const [modalIsVisible, setModalVisible] = useState(false);
  const [babyTasks, setBabyTasks] = useState([]);

  function startAddTaskHandler() {
    setModalVisible(true);
  }

  function endAddTaskHandler() {
    setModalVisible(false);
  }

  function addTaskHandler(enteredGoalText) {
    setBabyTasks((prevbabyTasks) => [
      ...prevbabyTasks,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddTaskHandler();
  }

  function deleteTasksHandler(id) {
    setBabyTasks((prevbabyTasks) => {
      return prevbabyTasks.filter((goal) => goal.id !== id);
    });
  }

  return (
    <LinearGradient
      colors={[Colors.primary1, "white"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={startAddTaskHandler}>
              Add New Baby Activity
            </PrimaryButton>
            {modalIsVisible && (
              <TaskInput
                visible={modalIsVisible}
                onAddTask={addTaskHandler}
                onEndTask={endAddTaskHandler}
              />
            )}
            <View style={styles.goalsContainer}>
              <FlatList
                data={babyTasks}
                renderItem={(itemData) => {
                  return (
                    <GoalItem
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeleteItem={deleteTasksHandler}
                    />
                  );
                }}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
  },
});
