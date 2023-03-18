import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { useRoute } from "../router";
// import { authChangeStateUser } from "../redux/auth/authOperations";

import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";

const Main = () => {
  const MainStack = createStackNavigator(); // вказує на групу навігаторів

  //   const { stateChange } = useSelector((state) => state.auth);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(authChangeStateUser());
  //   }, [stateChange]);

  //   const routing = useRoute(stateChange);

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );

  //   return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
