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
  Button,
} from "react-native";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.image}
      >
        <View style={styles.form_registration}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              value={value}
              onChangeText={inputHandler}
            />
            <TextInput
              style={styles.input}
              placeholder="Електронна пошта"
              value={value}
              onChangeText={inputHandler}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              value={value}
              onChangeText={inputHandler}
            />
            <Button
              style={styles.button}
              color="#FF6C00"
              title="Зареєструватись"
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
          </KeyboardAvoidingView>
        </View>
        {/* <Text style={styles.text}>
          Open up App.js to start working on your app! Mary is great!
        </Text> */}
        {/* <RegistrationScreen />
        <LoginScreen /> */}
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
    color: "#212121",
    fontSize: "30px",
    lineHeight: "35.16px",
    textAlign: "center",
    marginBottom: 33,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  form_registration: {
    backgroundColor: "#fff",
    // width: 355,
    height: 400,
    justifyContent: "center",
  },
  input: {
    borderWidth: "1",
    borderColor: "#E8E8E8",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
    lineHeight: 18.75,
    padding: 16,
  },
  button: {
    // borderWidth: "1",
    // borderColor: "#FF6C00",
    backgroundColor: "#ffa500",
    width: 343,
    height: 51,
  },
});
