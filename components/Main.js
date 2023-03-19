import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useRoute } from "../router";
// import { authChangeStateUser } from "../redux/auth/authOperations";

import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import ProfileScreen from "../Screens/main/ProfileScreen";
import PostScreen from "../Screens/main/PostScreen";
import CreatePostScreen from "../Screens/main/CreatePostsScreen";

import { useRoute } from "../router";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <MainStack.Navigator>
//         <MainStack.Screen
//           options={{ headerShown: false }}
//           name="Registration"
//           component={RegistrationScreen}
//         />
//         <MainStack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={LoginScreen}
//         />
//       </MainStack.Navigator>
//     );
//   }
//   return (
//     <MainTab.Navigator>
//       <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
//       <MainTab.Screen name="PostScreen" component={PostScreen} />
//       <MainTab.Screen name="CreatePostScreen" component={CreatePostScreen} />
//     </MainTab.Navigator>
//   );
// };

const Main = () => {
  const routing = useRoute(null);

  //   const { stateChange } = useSelector((state) => state.auth);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(authChangeStateUser());
  //   }, [stateChange]);

  //   const routing = useRoute(stateChange);

  return (
    <NavigationContainer>
      {routing}
      {/* <MainStack.Navigator>
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
      </MainStack.Navigator> */}
      {/* <MainTab.Navigator>
        <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
        <MainTab.Screen name="PostScreen" component={PostScreen} />
        <MainTab.Screen name="CreatePostScreen" component={CreatePostScreen} />
      </MainTab.Navigator> */}
    </NavigationContainer>
  );
};

export default Main;

// ____________auth______________
{
  /* <MainStack.Navigator>
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
</MainStack.Navigator> */
}
