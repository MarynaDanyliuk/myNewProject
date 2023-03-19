import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";
import PostScreen from "./Screens/main/PostScreen";
import CreatePostScreen from "./Screens/main/CreatePostsScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
      <MainTab.Screen name="PostScreen" component={PostScreen} />
      <MainTab.Screen name="CreatePostScreen" component={CreatePostScreen} />
    </MainTab.Navigator>
  );
};
