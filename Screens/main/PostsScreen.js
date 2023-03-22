import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../nestedScreens/Home";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen({ navigation }) {
  <NestedScreen.Navigator>
    <NestedScreen.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
    <NestedScreen.Screen name="MapScreen" component={MapScreen} />
  </NestedScreen.Navigator>;
}

// export default function PostsScreen({ route }) {
//   const [posts, setPosts] = useState([]);

//   console.log(route.params);

//   useEffect(() => {
//     if (route.params) {
//       setPosts((prevState) => [...prevState, route.params]);
//     }
//   }, [route.params]);
//   console.log(posts);
//   return (
//     <View style={styles.container}>
//       <View style={styles.container_icon}>
//         <MaterialIcons
//           name="logout"
//           size={32}
//           color="gray"
//           // onPress={}
//         />
//       </View>
//       <View style={styles.user}>
//         <View style={styles.user_avatar}></View>
//         <View style={styles.user_data}>
//           <Text style={styles.user_name}>Name</Text>
//           <Text>name@mail.com</Text>
//         </View>
//       </View>
//       <FlatList
//         data={posts}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.post}>
//             <Image source={{ uri: item.photo }} style={styles.post_photo} />
//             <View style={styles.post_data}>
//               <Text style={styles.post_title}>Forest</Text>
//               <View style={styles.post_wrapper}>
//                 <EvilIcons name="comment" size={32} color="grey" />
//                 <Text style={styles.comment}>0</Text>
//                 <View style={styles.location_wrapper}>
//                   <EvilIcons name="location" size={32} color="grey" />
//                   <Text style={styles.location}>Ivanofrankivsk</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//       <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
//         <Text style={styles.link}>Map</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginHorizontal: 16,
//   },
//   container_icon: {
//     flex: 1,
//     alignItems: "flex-end",
//     maxHeight: 32,
//     marginBottom: 32,
//   },
//   user: {
//     flexDirection: "row",
//     alignItems: "center",
//     maxHeight: 60,
//     marginBottom: 32,
//   },
//   user_avatar: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#ffa500",
//     borderRadius: 20,
//   },
//   user_data: {
//     marginLeft: 8,
//     // fontFamily: "Montserrat-Regular",
//     fontSize: 16,
//     lineHeight: 18.75,
//   },
//   user_name: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   post: {
//     marginBottom: 32,
//   },
//   post_photo: {
//     height: 240,
//     backgroundColor: "#ffa500",
//     borderRadius: 20,
//     marginBottom: 8,
//   },
//   post_title: {
//     marginBottom: 8,
//     // fontFamily: "Montserrat-Regular",
//     fontSize: 16,
//     lineHeight: 18.75,
//   },
//   post_wrapper: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   location_wrapper: {
//     display: "flex",
//     flexDirection: "row",
//     marginLeft: "auto",
//   },
//   location: {
//     marginLeft: 8,
//     fontSize: 16,
//     lineHeight: 18.75,
//     textAlign: "center",
//     // fontFamily: "Montserrat-Regular",
//     textDecorationLine: "underline",
//   },
//   comment: {
//     marginLeft: 8,
//     fontSize: 16,
//     lineHeight: 18.75,
//     textAlign: "center",
//     // fontFamily: "Montserrat-Regular",
//     color: "grey",
//   },
// });
