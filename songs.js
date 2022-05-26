import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";
import { setIsEnabledAsync } from "expo-av/build/Audio";

export class Play extends Component {
  playsound5 = async () => {
    Audio.Sound.createAsync(
      {
        uri: "https://hitzop.com/0m0c",
      },
      { shouldPlay: true }
    );
  };

  playsound4 = async () => {
    Audio.Sound.createAsync(
      {
        uri: "http://luvmp.com/wp-content/uploads/2018/10/Post_Malone_-_Sunflower_Ft_Swae_Lee__Luvmp.com_.mp3",
      },
      { shouldPlay: true }
    );
  };

  playsound3 = async () => {
    Audio.Sound.createAsync(
      {
        uri: "https://www.yt-download.org/download/PDeTO26fRVQ/mp3/320/1636356342/40c599b6055110c16e0c6a48d21838ccf821deff325b1ac5c203fc2c8f242f8c/0",
      },
      { shouldPlay: true }
    );
  };

  playsound2 = async () => {
    Audio.Sound.createAsync(
      {
        uri: "https://www.morexlusive.com/wp-content/uploads/2021/08/Sub_Urban_Bella_Poarch_-_Inferno.mp3",
      },
      { shouldPlay: true }
    );
  };

  playsound1 = async () => {
    Audio.Sound.createAsync(
      {
        uri: "http://www.ringtonesbull.com/wp-content/uploads/2021/10/Life-Goes-On-Music.mp3",
      },
      { shouldPlay: true }
    );
  };
  playsound = async () => {
    Audio.Sound.createAsync(
      {
        uri: "https://mp3mob.net/uploads/files/2021-06/1623745425_dvrst-close-eyes.mp3",
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <View>
        <ScrollView>
          <ImageBackground
            style={{ width: 500, height: 1000 }}
            source={{
              uri: "https://image5.uhdpaper.com/wallpaper-mobile-4k/rick-and-morty-minimalist-uhdpaper.com-4K-mobile-5.139.jpg",
            }}
          />
          <View style={styles.lifegoeson}>
            <TouchableOpacity onPress={this.playsound1}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={require("/Projects/React/Memeplayer/assets/ov.jpg")}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  left: 100,
                  bottom: 57,
                  color: "white",
                }}
              >
                Life Goes on
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lovely}>
            <TouchableOpacity onPress={this.playsound}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={require("/Projects/React/Memeplayer/assets/ce.jpg")}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  left: 100,
                  bottom: 57,
                  color: "white",
                }}
              >
                Close eyes
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inferno}>
            <TouchableOpacity onPress={this.playsound2}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={{
                  uri: "https://tonesgalaxy.com/wp-content/uploads/2021/08/ab67616d0000b27309c398b31c366c6fa92c0732.jpeg",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  left: 100,
                  bottom: 57,
                  color: "white",
                }}
              >
                Inferno
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.idfc}>
            <TouchableOpacity onPress={this.playsound3}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={{
                  uri: "https://i.ytimg.com/vi/PDeTO26fRVQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAeftYdg4vtudZ7B3a8RGW9cvSXKA",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  left: 100,
                  bottom: 57,
                  color: "white",
                }}
              >
                Idfc
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spider}>
            <TouchableOpacity onPress={this.playsound4}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={{
                  uri: "http://a10.gaanacdn.com/images/albums/73/2249573/crop_480x480_2249573.jpg",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  left: 100,
                  bottom: 57,
                  color: "white",
                }}
              >
                Sunflower
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.siuk}>
            <TouchableOpacity onPress={this.playsound5}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={{
                  uri: "https://images.hungama.com/c/1/848/18c/1430418/1430418_300x300.jpg",
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  left: 100,
                  bottom: 57,
                  color: "white",
                }}
              >
                Somebody I used to know
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{ position: "absolute", top: 785, left: 200 }}>
          <TouchableOpacity onPress={() => Audio.setIsEnabledAsync(false)}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/188/188072.png",
              }}
            />
            <Text
              style={{
                bottom: 40,
                fontWeight: "bold",
                fontSize: 20,
                right: 110,
                color: "white",
              }}
            >
              Play
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", top: 785, right: 320 }}>
          <TouchableOpacity onPress={() => Audio.setIsEnabledAsync(true)}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("/Projects/React/Memeplayer/assets/play.png")}
            />
            <Text
              style={{
                bottom: 37,
                fontWeight: "bold",
                fontSize: 20,
                left: 250,
                color: "white",
              }}
            >
              Stop
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  lifegoeson: {
    top: 100,
    left: 20,
    position: "absolute",
    color: "white",
  },
  lovely: {
    top: 250,
    left: 20,
    position: "absolute",
  },
  inferno: {
    top: 400,
    left: 20,
    position: "absolute",
    color: "white",
  },
  idfc: {
    top: 550,
    left: 20,
    position: "absolute",
    color: "white",
  },
  spider: {
    top: 700,
    left: 20,
    position: "absolute",
    color: "white",
  },
  siuk: {
    top: 850,
    left: 20,
    position: "absolute",
    color: "white",
  },
});
export default Play;
