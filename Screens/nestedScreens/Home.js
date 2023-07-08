import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { authSignOutUser } from "../../redux/auth/authOperations";

import db from "../../firebase/config";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Home({ route, navigation }) {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const { userId, nickname, email } = useSelector((state) => state.auth);

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }

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
      <View>
        {posts && (
          <SafeAreaView style={{ paddingBottom: 88 }}>
            <FlatList
              // style={styles}
              data={posts}
              keyExtractor={(_, indx) => indx.toString()}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.item}>
                    <Image
                      source={{ uri: item.photo }}
                      style={{ height: 240, borderRadius: 8 }}
                    />
                  </View>
                  <Text style={styles.post_title}>{item.comment}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginBottom: 32,
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginRight: 24,
                        }}
                        onPress={() => {
                          navigation.navigate("CommentsScreen", {
                            photo: item.photo,
                            postId: item.id,
                          });
                        }}
                      >
                        <Feather
                          name="message-circle"
                          size={26}
                          color="#FF6C00"
                        />
                        <Text
                          style={{
                            fontFamily: "Montserrat-Regular",
                            color: "#212121",
                            fontSize: 16,
                            marginLeft: 6,
                          }}
                        >
                          {"0"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onPress={() => {
                        navigation.navigate("MapScreen", {
                          location: item.location,
                        });
                      }}
                    >
                      <Feather name="map-pin" size={26} color="#FF6C00" />
                      <Text
                        style={{
                          fontFamily: "Montserrat-Regular",
                          color: "#212121",
                          fontSize: 16,
                          marginLeft: 6,
                          textDecorationLine: "underline",
                        }}
                      >
                        {item.locationName}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        )}
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
    paddingTop: 5,
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
  flatList: {
    position: "relative",
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
