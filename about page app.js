import React from "react";
import {
  Image,
  Header,
  Linking,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://wallpapercave.com/wp/wp6156429.jpg" }}
        style={{
          height: 1000,
          width: 500,
          position: "relative",
          top: 2,
          left: 2,
        }}
      ></ImageBackground>

      <Text style={styles.text}>Thameem Studios</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.youtube.com/c/ThameemStudios");
        }}
        style={{
          padding: 10,
          borderRadius: 25,
          position: "absolute",
          top: 140,
          left: 30,
        }}
      >
        <Image
          source={require("./assets/logo.png")}
          style={{ width: 80, height: 100 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            "https://www.blogger.com/blog/posts/4802142470574199507"
          );
        }}
        style={{
          padding: 10,
          borderRadius: 25,
          position: "absolute",
          top: 300,
          left: 35,
        }}
      >
        <Image
          source={require("./assets/blog.png")}
          style={{ width: 70, height: 60 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://github.com/thameem-giter");
        }}
        style={{
          padding: 10,
          borderRadius: 25,
          position: "absolute",
          top: 440,
          left: 35,
        }}
      >
        <Image
          source={require("./assets/github.png")}
          style={{ width: 70, height: 70 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.instagram.com/thameem_your_friend/");
        }}
        style={{
          padding: 10,
          borderRadius: 25,
          position: "absolute",
          top: 600,
          left: 35,
        }}
      >
        <Image
          source={require("./assets/insta.png")}
          style={{ width: 70, height: 70 }}
        />
      </TouchableOpacity>
      <Text style={styles.text2}>Youtube channel</Text>
      <Text style={styles.text3}>BlogSpot</Text>
      <Text style={styles.text4}>Github</Text>
      <Text style={styles.text5}>Instagram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    top: 50,
    position: "absolute",
  },
  text2: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    top: 180,
    left: 130,
    position: "absolute",
  },
  text3: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    top: 320,
    left: 130,
    position: "absolute",
  },
  text4: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    top: 470,
    left: 130,
    position: "absolute",
  },
  text5: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    top: 625,
    left: 130,
    position: "absolute",
  },
});
