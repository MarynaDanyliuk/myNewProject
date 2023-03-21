import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
// import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostsScreen({ route }) {
  const [posts, setPosts] = useState([]);

  console.log(route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.container}>
      <View style={styles.container_icon}>
        <MaterialIcons
          name="logout"
          size={32}
          color="gray"
          // onPress={}
        />
      </View>
      <View style={styles.user}>
        <View style={styles.user_avatar}></View>
        <View style={styles.user_data}>
          <Text style={styles.user_name}>Name</Text>
          <Text>name@mail.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image src={{ uri: item.photo }} style={styles.post_photo} />
            {/* <View style={styles.post_photo}></View> */}
            <View style={styles.post_data}>
              <Text style={styles.post_title}>Forest</Text>
              <View style={styles.post_wrapper}>
                <EvilIcons name="comment" size={32} color="grey" />
                <Text style={styles.comment}>0</Text>
                <View style={styles.location_wrapper}>
                  <EvilIcons name="location" size={32} color="grey" />
                  <Text style={styles.location}>Ivanofrankivsk</Text>
                </View>
              </View>
            </View>
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
    // fontFamily: "Montserrat-Regular",
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
    // fontFamily: "Montserrat-Regular",
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
    // fontFamily: "Montserrat-Regular",
    textDecorationLine: "underline",
  },
  comment: {
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    // fontFamily: "Montserrat-Regular",
    color: "grey",
  },
});

// <View style={styles.container}>
//   <FlatList
//     // data={userPosts}
//     // keyExtractor={(_, index) => index.toString()}
//     renderItem={({ item }) => (
//       <View style={styles.postWrapper}>
//         <Image source={{ uri: item.photo }} style={styles.photo} />
//         <Text style={styles.name}>{item.comment}</Text>
//         <View style={{ flex: 1, flexDirection: "row" }}>
//           <View>
//             <EvilIcons
//               onPress={() =>
//                 navigation.navigate("Comments", {
//                   postId: item.id,
//                   photo: item.photo,
//                 })
//               }
//               name="comment"
//               size={32}
//               color="#FF6C00"
//             />
//           </View>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "flex-end",
//             }}
//           >
//             <EvilIcons
//               name="location"
//               size={32}
//               color="#FF6C00"
//               onPress={() =>
//                 navigation.navigate("Map", { location: item.location })
//               }
//             />
//             <Text>{item.locationName}</Text>
//           </View>
//         </View>
//       </View>
//     )}
//   />
// </View>;

// return (
//   <View style={styles.container}>
//     <KeyboardAvoidingView
//       behavior={Platform.OS == "ios" ? "padding" : "height"}
//     >
//       <View>
//         <Text style={styles.screen_title}>Post Screen</Text>
//         <Ionicons name="md-checkmark-circle" size={32} color="green" />
//       </View>
//     </KeyboardAvoidingView>
//   </View>
// );

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
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
