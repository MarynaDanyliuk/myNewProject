import React, { useState, useEffect, useCallback } from "react";
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

import * as Font from "expo-font";

// import AppLoading from "expo-app-loading";

// import { AppLoading } from "expo";

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

const loadApplication = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
};

export default function App() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadApplication();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
    // ____________________________
    // async function dismissSplash() {
    //   await SplashScreen.hideAsync();
    // }
    // dismissSplash();
  });

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    setState(initialState);
    Keyboard.dismiss();
  };

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  // const { login, email, password } = state;
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
                value={state.login}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, login: value }));
                }}
                // onChangeText={onChangeLogin}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Електронна пошта"
                placeholderTextColor="#BDBDBD"
                value={state.email}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, email: value }));
                }}
                // onChangeText={onChangeEmail}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                value={state.password}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, password: value }));
                }}
                // onChangeText={onChangePassword}
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
    fontFamily: "Montserrat-Regular",
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

// ____________________________
// const [state, setState] = useState(initialState)
// const [login, setLogin] = React.useState("Useless Text");
// const [email, setEmail] = React.useState("");
// const [password, setPassword] = React.useState("");
// const [value, setValue] = useState("");
// const inputHandler = (text) => setValue(text);
// const onChangeLogin = (value) => setLogin(value);
// const onChangeEmail = (value) => setEmail(value);
// const onChangePassword = (value) => setPassword(value);
