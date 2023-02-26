import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background_2x.jpg")}
        style={styles.image}
      >
        <Text style={styles.text}>
          Open up App.js to start working on your app! Mary is great!
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Type text"
            value={value}
            onChangeText={inputHandler}
          />
          <TextInput
            placeholder="Type text"
            value={value}
            onChangeText={inputHandler}
          />
          <TextInput
            placeholder="Type text"
            value={value}
            onChangeText={inputHandler}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "40",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
