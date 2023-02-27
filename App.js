import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import * as SplashScreen from "expo-splash-screen";

// import { RegistrationScreen } from "./Screens/RegistrationScreen";
// import { LoginScreen } from "./Screens/LoginScreen";

// SplashScreen.preventAutoHideAsync()
//   .then((result) =>
//     console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
//   )
//   .catch(console.warn);

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);

  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function dismissSplash() {
      await SplashScreen.hideAsync();
    }
    dismissSplash();
  });

  const keyboardHide = () => {
    setIsShownKeyboard(false);

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form_registration,
                paddingBottom: isShownKeyboard ? 32 : 113,
              }}
            >
              <View style={styles.avatar}></View>
              <Text style={styles.text}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                value={value}
                onChangeText={inputHandler}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Електронна пошта"
                placeholderTextColor="#BDBDBD"
                value={value}
                onChangeText={inputHandler}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                value={value}
                onChangeText={inputHandler}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.button_title}>Зареєструватись</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#212121",
    fontSize: "30px",
    lineHeight: "35.16px",
    textAlign: "center",
    marginBottom: 33,
    marginTop: 92,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form_registration: {
    position: "relative",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
  "input:last-child": {
    marginBottom: 0,
  },
  button: {
    borderWidth: "1",
    borderColor: Platform.OS === "ios" ? "transparent" : "#FF6C00",
    borderRadius: 25,
    backgroundColor: "#ffa500",
    marginHorizontal: 16,
    marginTop: 27,
    // marginBottom: 113,
    height: 51,
    justifyContent: "center",
  },
  button_title: {
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    // textAlignVertical: "center",
    color: "#FFFFFF",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    position: "absolute",
    top: -60,
    marginHorizontal: 128,
    // marginLeft: "auto",
    // marginRight: "auto",
    // transform: [{ translateY: -50 }],
  },
});

{
  /* <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form_registration,
              marginBottom: isShownKeyboard ? 32 : 0,
            }}
          >
            <View style={styles.avatar}></View>
            <Text style={styles.text}>Реєстрація</Text>

            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              value={value}
              onChangeText={inputHandler}
              onFocus={() => {
                setIsShownKeyboard(true);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Електронна пошта"
              placeholderTextColor="#BDBDBD"
              value={value}
              onChangeText={inputHandler}
              onFocus={() => {
                setIsShownKeyboard(true);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              value={value}
              onChangeText={inputHandler}
              secureTextEntry={true}
              onFocus={() => {
                setIsShownKeyboard(true);
              }}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Text style={styles.button_title}>Зареєструватись</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView> */
}
