import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

// import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home({ route, navigation }) {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const { userId, nickname, email } = useSelector((state) => state.auth);

  const getUserPosts = async () => {
    const postsRef = await collection(db, "posts");
    const q = await query(postsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    setUserPosts(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  // console.log(route.params);

  useEffect(() => {
    // if (route.params) {
    //   setUserPosts((prevState) => [...prevState, route.params]);
    // }

    getUserPosts();
  }, [route.params]);

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_icon}>
        <MaterialIcons name="logout" size={32} color="gray" onPress={signOut} />
      </View>
      <View style={styles.user}>
        <View style={styles.wrapper_avatar}>
          <View>
            <Image
              style={styles.user_avatar}
              source={require("../../assets/images/user.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.user_data}>
          <Text style={styles.user_name}>{nickname}</Text>
          <Text>{email}</Text>
        </View>
      </View>
      <FlatList
        data={userPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image source={{ uri: item.photo }} style={styles.post_photo} />
            <View style={styles.post_data}>
              <Text style={styles.post_title}>{item.title}</Text>
              <View style={styles.post_wrapper}>
                <EvilIcons
                  onPress={() =>
                    navigation.navigate("CommentsScreen", {
                      postId: item.id,
                      photo: item.photo,
                    })
                  }
                  name="comment"
                  size={32}
                  color="grey"
                />
                <Text style={styles.comment}>{item.comment}</Text>
                <View style={styles.location_wrapper}>
                  <EvilIcons
                    onPress={() =>
                      navigation.navigate("MapScreen", {
                        location: item.location,
                      })
                    }
                    name="location"
                    size={32}
                    color="grey"
                  />
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            </View>
            <Button
              title="go to map"
              onPress={() => navigation.navigate("MapScreen")}
            />
            <Button
              title="go to Comments"
              onPress={() => navigation.navigate("CommentsScreen")}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  container_icon: {
    flex: 1,
    alignItems: "flex-end",
    maxHeight: 32,
    marginBottom: 32,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
    marginBottom: 32,
  },
  user_avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#ffa500",
    borderRadius: 20,
  },
  user_data: {
    marginLeft: 8,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  user_name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  post: {
    marginBottom: 32,
  },
  post_photo: {
    height: 240,
    backgroundColor: "#ffa500",
    borderRadius: 20,
    marginBottom: 8,
  },
  post_title: {
    marginBottom: 8,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  post_wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  location_wrapper: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
  location: {
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    textDecorationLine: "underline",
  },
  comment: {
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    color: "grey",
  },
});

// const Home = ({ route, navigation }) => {
//   return (
//     <View style={styles.container}>
//       <MaterialIcons
//         name="logout"
//         size={32}
//         color="gray"
//         // onPress={}
//         style={{ marginBottom: 32 }}
//       />
//       <FlatList
//         data={posts}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.postWrapper}>
//             <Image source={{ uri: item.photo }} style={styles.photo} />
//             <Text style={styles.name}>{item.comment}</Text>
//             <View style={{ flex: 1, flexDirection: "row" }}>
//               <View>
//                 <EvilIcons
//                   onPress={() =>
//                     navigation.navigate("Comments", {
//                       postId: item.id,
//                       photo: item.photo,
//                     })
//                   }
//                   name="comment"
//                   size={32}
//                   color="#FF6C00"
//                 />
//               </View>

//               <View
//                 style={{
//                   flex: 1,
//                   flexDirection: "row",
//                   justifyContent: "flex-end",
//                 }}
//               >
//                 <EvilIcons
//                   name="location"
//                   size={32}
//                   color="#FF6C00"
//                   onPress={() =>
//                     navigation.navigate("Map", { location: item.location })
//                   }
//                 />
//                 <Text>{item.locationName}</Text>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16,
//   },
//   postWrapper: {
//     marginBottom: 32,
//   },
//   photo: {
//     height: 240,
//     borderRadius: 8,
//     marginBottom: 8,
//   },

//   name: {
//     fontSize: 16,
//     lineHeight: 19,
//     marginBottom: 8,
//   },
// });

// export default Home;
