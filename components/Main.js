import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

// import { authChangeStateUser } from "../redux/auth/authOperations";

import { useRoute } from "../router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Main = () => {
  const routing = useRoute(null);

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
