import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View } from "react-native";
import Play from "./components/songs";

export class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#1e1e1e" }}>
        <StatusBar style={"auto"} />
        <View>
          <Play />
        </View>
      </View>
    );
  }
}

export default App;
