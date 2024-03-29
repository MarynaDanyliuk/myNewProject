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
  Dimensions,
} from "react-native";

import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../redux/auth/authOperations";

import * as Font from "expo-font";

import * as SplashScreen from "expo-splash-screen";

const initialState = {
  nickname: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
  });
};

export default function RegistrationScreen({ navigation }) {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const { nickname, email, password } = state;

  const dispatch = useDispatch();

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    async function prepare() {
      try {
        await loadApplication();
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  });

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log(width);
    };
    const dem = Dimensions.addEventListener("change", onChange);
    return () => dem.remove();
  }, []);

  const hangleSubmit = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(state);

    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    // setState(initialState);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form_registration,
                paddingBottom: isShownKeyboard ? 32 : 78,
              }}
            >
              <View style={styles.wrapper_avatar}>
                <View style={styles.avatar}></View>
              </View>
              <Text style={styles.screen_title}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                value={nickname}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, nickname: value }));
                }}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Електронна пошта"
                placeholderTextColor="#BDBDBD"
                value={email}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, email: value }));
                }}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                value={password}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, password: value }));
                }}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                // onPress={keyboardHide}
                onPress={hangleSubmit}
              >
                <Text style={styles.button_title}>Зареєструватись</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>У вас уже є аккаунт? Увійти</Text>
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
  screen_title: {
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
    display: "flex",
    backgroundColor: "#fff",
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
    fontFamily: "Montserrat-Regular",
    color: "#212121",
    fontSize: 16,
    lineHeight: 18.75,
    padding: 16,
  },
  "input:last-child": {
    marginBottom: 0,
  },
  "input:focus": {
    borderWidth: "1",
    borderColor: "#blue",
  },
  button: {
    borderWidth: "1",
    borderColor: Platform.OS === "ios" ? "transparent" : "#FF6C00",
    borderRadius: 25,
    backgroundColor: "#ffa500",
    marginHorizontal: 16,
    marginTop: 27,
    marginBottom: 16,
    height: 51,
    justifyContent: "center",
  },
  button_title: {
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    color: "#FFFFFF",
  },
  wrapper_avatar: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    top: -60,
  },
  link: {
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    textDecorationLine: "underline",
  },
});
