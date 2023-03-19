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

// ____ icons import_________
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  // if (!isAuth) {
  //   return (
  //     <MainStack.Navigator>
  //       <MainStack.Screen
  //         options={{ headerShown: false }}
  //         name="Registration"
  //         component={RegistrationScreen}
  //       />
  //       <MainStack.Screen
  //         options={{ headerShown: false }}
  //         name="Login"
  //         component={LoginScreen}
  //       />
  //     </MainStack.Navigator>
  //   );
  // }
  return (
    <MainTab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="user" size={24} color="grey" />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24} color="grey" />
          ),
        }}
        name="PostScreen"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="ios-create-outline" size={24} color="grey" />
          ),
        }}
        name="CreatePostScreen"
        component={CreatePostScreen}
      />
    </MainTab.Navigator>
  );
};
