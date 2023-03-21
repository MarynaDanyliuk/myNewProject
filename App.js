import React, { useState, useEffect, useCallback } from "react";
import { LogBox } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
// import { Provider } from "react-redux";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// import { AppLoading } from "expo";

// import RegistrationScreen from "./Screens/auth/RegistrationScreen";
// import LoginScreen from "../Screens/auth/LoginScreen";
import Main from "./components/Main";

// const initialState = {
//   login: "",
//   email: "",
//   password: "",
// };

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

const loadApplication = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
};

export default function App() {
  // const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  // const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadApplication();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log(width);
    };

    const dem = Dimensions.addEventListener("change", onChange);
    return () => dem.remove();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
      // await SplashScreen.show();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  // const keyboardHide = () => {
  //   setIsShownKeyboard(false);
  //   setState(initialState);
  //   Keyboard.dismiss();
  // };

  return (
    // <Provider store={store}>
    <Main />
    // </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   screen_title: {
//     fontFamily: "Montserrat-Regular",
//     color: "#212121",
//     fontSize: "30px",
//     lineHeight: "35.16px",
//     textAlign: "center",
//     marginBottom: 33,
//     marginTop: 32,
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
//   form_registration: {
//     display: "flex",
//     backgroundColor: "#fff",
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//   },
//   input: {
//     borderWidth: "1",
//     borderColor: "#E8E8E8",
//     borderRadius: 10,
//     height: 50,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     backgroundColor: "#F6F6F6",
//     fontFamily: "Montserrat-Regular",
//     color: "#212121",
//     fontSize: 16,
//     lineHeight: 18.75,
//     padding: 16,
//     "&:active": {
//       borderWidth: "1",
//       borderColor: "#FF6C00",
//     },
//   },
//   "input:last-child": {
//     marginBottom: 0,
//   },
//   button: {
//     borderWidth: "1",
//     borderColor: Platform.OS === "ios" ? "transparent" : "#FF6C00",
//     borderRadius: 25,
//     backgroundColor: "#ffa500",
//     marginHorizontal: 16,
//     marginTop: 27,
//     marginBottom: 16,
//     height: 51,
//     justifyContent: "center",
//   },
//   button_title: {
//     fontSize: 16,
//     lineHeight: 18.75,
//     textAlign: "center",
//     fontFamily: "Montserrat-Regular",
//     color: "#FFFFFF",
//   },
//   wrapper_avatar: {
//     display: "flex",
//     alignItems: "center",
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 20,
//     top: -60,
//   },
//   link: {
//     fontSize: 16,
//     lineHeight: 18.75,
//     textAlign: "center",
//     fontFamily: "Montserrat-Regular",
//     textDecorationLine: "underline",
//   },
// });

{
  /* <View
              style={{
                ...styles.form_registration,
                paddingBottom: isShownKeyboard ? 32 : 78,
              }}
            >
              <Text style={styles.screen_title}>Увійти</Text>
              <TextInput
                style={styles.input}
                placeholder="Електронна пошта"
                placeholderTextColor="#BDBDBD"
                value={state.email}
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
                value={state.password}
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
                onPress={keyboardHide}
              >
                <Text style={styles.button_title}>Зареєструватись</Text>
              </TouchableOpacity>
              <Text style={styles.link}>У вас уже є аккаунт? Увійти</Text>
            </View> */
}

// _______________Login page___________________________

// <View style={styles.container} onLayout={onLayoutRootView}>
//   <TouchableWithoutFeedback onPress={keyboardHide}>
//     <ImageBackground
//       source={require("./assets/images/background.jpg")}
//       style={styles.image}
//     >
//       <KeyboardAvoidingView
//         behavior={Platform.OS == "ios" ? "padding" : "height"}
//       >
//         <View
//           style={{
//             ...styles.form_registration,
//             paddingBottom: isShownKeyboard ? 32 : 78,
//           }}
//         >
//           {/* <View style={styles.wrapper_avatar}>
//             <View style={styles.avatar}></View>
//           </View> */}
//           <Text style={styles.screen_title}>Увійти</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Електронна пошта"
//             placeholderTextColor="#BDBDBD"
//             value={state.email}
//             onChangeText={(value) => {
//               setState((prevState) => ({ ...prevState, email: value }));
//             }}
//             onFocus={() => {
//               setIsShownKeyboard(true);
//             }}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Пароль"
//             placeholderTextColor="#BDBDBD"
//             value={state.password}
//             onChangeText={(value) => {
//               setState((prevState) => ({ ...prevState, password: value }));
//             }}
//             secureTextEntry={true}
//             onFocus={() => {
//               setIsShownKeyboard(true);
//             }}
//           />
//           <TouchableOpacity
//             activeOpacity={0.7}
//             style={styles.button}
//             onPress={keyboardHide}
//           >
//             <Text style={styles.button_title}>Зареєструватись</Text>
//           </TouchableOpacity>
//           <Text style={styles.link}>У вас уже є аккаунт? Увійти</Text>
//         </View>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   </TouchableWithoutFeedback>
//   <StatusBar style="auto" />
// </View>

// ________________Registration page_______________________
// <View
//   style={{
//     ...styles.form_registration,
//     paddingBottom: isShownKeyboard ? 32 : 78,
//   }}
// >
//   <View style={styles.avatar}></View>
//   <Text style={styles.screen_title}>Реєстрація</Text>
//   <TextInput
//     style={styles.input}
//     placeholder="Логін"
//     placeholderTextColor="#BDBDBD"
//     value={state.login}
//     onChangeText={(value) => {
//       setState((prevState) => ({ ...prevState, login: value }));
//     }}
//     onFocus={() => {
//       setIsShownKeyboard(true);
//     }}
//   />
//   <TextInput
//     style={styles.input}
//     placeholder="Електронна пошта"
//     placeholderTextColor="#BDBDBD"
//     value={state.email}
//     onChangeText={(value) => {
//       setState((prevState) => ({ ...prevState, email: value }));
//     }}
//     onFocus={() => {
//       setIsShownKeyboard(true);
//     }}
//   />
//   <TextInput
//     style={styles.input}
//     placeholder="Пароль"
//     placeholderTextColor="#BDBDBD"
//     value={state.password}
//     onChangeText={(value) => {
//       setState((prevState) => ({ ...prevState, password: value }));
//     }}
//     secureTextEntry={true}
//     onFocus={() => {
//       setIsShownKeyboard(true);
//     }}
//   />
//   <TouchableOpacity
//     activeOpacity={0.7}
//     style={styles.button}
//     onPress={keyboardHide}
//   >
//     <Text style={styles.button_title}>Зареєструватись</Text>
//   </TouchableOpacity>
//   <Text style={styles.link}>У вас уже є аккаунт? Увійти</Text>
// </View>;
// ____________________________________________________________
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
