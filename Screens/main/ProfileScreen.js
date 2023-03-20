import React from "react";
import { View, StyleSheet } from "react-native";
// import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container_icon}>
      <MaterialIcons
        name="logout"
        size={32}
        color="gray"
        // onPress={}
        style={{ marginBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 8,
  },
  container_icon: {
    flex: 1,
    alignItems: "flex-end",
    marginHorizontal: 8,
  },
  postWrapper: {
    marginBottom: 32,
  },
  photo: {
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "roboto-regular",
    marginBottom: 8,
  },
});

//  <View style={styles.container}>
//    <FlatList
//      // data={userPosts}
//      // keyExtractor={(_, index) => index.toString()}
//      renderItem={({ item }) => (
//        <View style={styles.postWrapper}>
//          {/* <Image source={{ uri: item.photo }} style={styles.photo} />
//           <Text style={styles.name}>{item.comment}</Text> */}
//          <View style={{ flex: 1, flexDirection: "row" }}>
//            <View>
//              <EvilIcons
//                // onPress={() =>
//                //   navigation.navigate("Comments", {
//                //     postId: item.id,
//                //     photo: item.photo,
//                //   })
//                // }
//                name="comment"
//                size={32}
//                color="#FF6C00"
//              />
//            </View>
//            <View
//              style={{
//                flex: 1,
//                flexDirection: "row",
//                justifyContent: "flex-end",
//              }}
//            >
//              <EvilIcons
//                name="location"
//                size={32}
//                color="#FF6C00"
//                // onPress={() =>
//                //   navigation.navigate("Map", { location: item.location })
//                // }
//              />
//              {/* <Text>{item.locationName}</Text> */}
//            </View>
//          </View>
//        </View>
//      )}
//    />
//  </View>;
