import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostsScreen() {
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
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
