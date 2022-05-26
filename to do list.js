import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import Addtodo from "./components/addtodo";
import Thala from "./components/thala";
import Todolist from "./components/todolist";
export default function App() {
  const submit = (text) => {
    if (text.length > 3) {
      Settodo((prevtodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevtodo];
      });
    } else {
      Alert.alert("oops!...", "To do must be over 3 letters", [
        { text: "understood" },
      ]);
    }
  };
  const [todo, Settodo] = useState("");
  const presshandle = (key) => {
    Settodo((prevtodo) => {
      return prevtodo.filter((todo) => todo.key != key);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#51A0D5" />
        <Thala />
        <View style={styles.head}>
          <Addtodo submit={submit} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <Todolist item={item} presshandle={presshandle} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
