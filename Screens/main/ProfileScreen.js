import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase/config";

import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const { userId, nickname } = useSelector((state) => state.auth);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  const getUserPosts = async () => {
    const postsRef = await collection(db, "posts");
    const q = await query(postsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    setUserPosts(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    getUserPosts();
  }, []);

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.image}
      >
        <SafeAreaView style={{ ...styles.content, width: dimensions }}>
          <View style={styles.header}>
            <Text style={styles.screen_title}>{nickname}</Text>
          </View>
          <FlatList
            style={styles.flatList}
            data={userPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <View style={styles.item}>
                  <Image
                    source={{ uri: item.photo }}
                    style={{ height: 240, borderRadius: 8 }}
                  />
                </View>
                <Text style={styles.itemText}>{item.comment}</Text>
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
                      onPress={() =>
                        navigation.navigate("Comments", {
                          postId: item.id,
                          photo: item.photo,
                        })
                      }
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 24,
                      }}
                    >
                      <Feather
                        name="message-circle"
                        size={24}
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
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("MapScreen", {
                          postId: item.id,
                          photo: item.photo,
                        })
                      }
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Feather name="thumbs-up" size={24} color="#FF6C00" />
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
                      navigation.navigate("CommentsScreen", {
                        location: item.location,
                      });
                    }}
                  >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        color: "#212121",
                        fontSize: 16,
                        marginLeft: 6,
                        textDecorationLine: "underline",
                      }}
                    >
                      {item.city}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View style={styles.wrapper_avatar}>
            <View style={styles.avatar}>
              <Image source={require("../../assets/images/user.png")}></Image>
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 100,
                  right: -14,
                  bottom: 0,
                }}
                source={require("../../assets/images/delete.png")}
              ></Image>
            </View>
          </View>

          <TouchableOpacity
            style={{ position: "absolute", top: 22, right: 16 }}
            onPress={signOut}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
  // <View style={styles.container}>
  //   <ImageBackground
  //     source={require("../../assets/images/background.jpg")}
  //     style={styles.image}
  //   >
  //     <MaterialIcons
  //       name="logout"
  //       size={32}
  //       color="gray"
  //       onPress={signOut}
  //       style={styles.icon_logout}
  //     />
  //     <View
  //       style={{
  //         ...styles.form_registration,
  //       }}
  //     >
  //       <View style={styles.header}>
  //         <Text style={styles.screen_title}>{name}</Text>
  //       </View>
  //       <FlatList
  //         style={styles.flatList}
  //         data={userPosts}
  //         // keyExtractor={(_, index) => index.toString()}
  //         keyExtractor={(item) => item.id}
  //         renderItem={({ item }) => (
  //           <View>
  //             <View style={styles.item}>
  //               <Image
  //                 source={{ uri: item.photo }}
  //                 style={{ height: 240, borderRadius: 8 }}
  //               />
  //             </View>
  //             <Text style={styles.itemText}>{item.title}</Text>
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginBottom: 32,
  //                 justifyContent: "space-between",
  //               }}
  //             >
  //               <View
  //                 style={{
  //                   flexDirection: "row",
  //                 }}
  //               >
  //                 <TouchableOpacity
  //                   onPress={() =>
  //                     navigation.navigate("Comments", { postId: item.id })
  //                   }
  //                   style={{
  //                     flexDirection: "row",
  //                     alignItems: "center",
  //                     marginRight: 24,
  //                   }}
  //                 >
  //                   <Feather
  //                     name="message-circle"
  //                     size={24}
  //                     color="#FF6C00"
  //                   />
  //                   <Text
  //                     style={{
  //                       fontFamily: "Montserrat-Regular",
  //                       color: "#212121",
  //                       fontSize: 16,
  //                       marginLeft: 6,
  //                     }}
  //                   >
  //                     {"0"}
  //                   </Text>
  //                 </TouchableOpacity>
  //                 <TouchableOpacity
  //                   style={{ flexDirection: "row", alignItems: "center" }}
  //                 >
  //                   <Feather name="thumbs-up" size={24} color="#FF6C00" />
  //                   <Text
  //                     style={{
  //                       fontFamily: "Montserrat-Regular",
  //                       color: "#212121",
  //                       fontSize: 16,
  //                       marginLeft: 6,
  //                     }}
  //                   >
  //                     {"0"}
  //                   </Text>
  //                 </TouchableOpacity>
  //               </View>
  //               <TouchableOpacity
  //                 style={{
  //                   flexDirection: "row",
  //                   alignItems: "center",
  //                 }}
  //                 onPress={() => {
  //                   navigation.navigate("Map", {
  //                     location: item.location,
  //                   });
  //                 }}
  //               >
  //                 <Feather name="map-pin" size={24} color="#BDBDBD" />
  //                 <Text
  //                   style={{
  //                     fontFamily: "Montserrat-Regular",
  //                     color: "#212121",
  //                     fontSize: 16,
  //                     marginLeft: 6,
  //                     textDecorationLine: "underline",
  //                   }}
  //                 >
  //                   {item.city}
  //                 </Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         )}
  //       />
  //       <View
  //         style={{
  //           position: "absolute",
  //           left: 0,
  //           top: 0,
  //           transform: [{ translateX: 128 }, { translateY: -60 }],
  //           backgroundColor: "#F6F6F6",
  //           borderRadius: 16,
  //           width: 120,
  //           height: 120,
  //         }}
  //       >
  //         <Image source={require("../../assets/images/user.png")}></Image>
  //         <Image
  //           style={{
  //             position: "absolute",
  //             width: 25,
  //             height: 25,
  //             backgroundColor: "#FFFFFF",
  //             borderRadius: 100,
  //             right: -14,
  //             bottom: 14,
  //           }}
  //           source={require("../../assets/images/user.png")}
  //         ></Image>
  //       </View>
  //       <TouchableOpacity
  //         style={{ position: "absolute", top: 22, right: 16 }}
  //         onPress={signOut}
  //       >
  //         <Feather name="log-out" size={24} color="#BDBDBD" />
  //       </TouchableOpacity>
  //       {/* <View style={styles.wrapper_avatar}>
  //         <View style={styles.avatar}></View>
  //       </View> */}
  //       {/* <FlatList
  //         style={styles.flatList}
  //         data={userPosts}
  //         keyExtractor={(_, index) => index.toString()}
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
  //         )} */}
  //       {/* /> */}
  //       {/* <View style={styles.wrapper_avatar}>
  //         <View style={styles.avatar}></View>
  //       </View>
  //       <Text style={styles.screen_title}>Mary Danyliuk</Text>
  //       <View style={styles.post}>
  //         <View style={styles.post_photo}></View>
  //         <View style={styles.post_data}>
  //           <Text style={styles.post_title}>Forest</Text>
  //           <View style={styles.post_wrapper}>
  //             <EvilIcons name="comment" size={32} color="grey" />
  //             <Text style={styles.comment}>0</Text>
  //             <View style={styles.location_wrapper}>
  //               <EvilIcons name="location" size={32} color="grey" />
  //               <Text style={styles.location}>Ivanofrankivsk</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View> */}
  //     </View>
  //   </ImageBackground>
  // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon_logout: {
    position: "absolute",
    display: "flex",
    top: 0,
    right: 0,
    marginRight: 8,
    marginTop: 8,
  },
  screen_title: {
    fontFamily: "Montserrat-Regular",
    color: "#212121",
    fontSize: "30px",
    lineHeight: "35.16px",
    textAlign: "center",
    // marginBottom: 33,
    marginTop: 92,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form_registration: {
    display: "flex",
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapper_avatar: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    top: -655,
  },
  post: {
    marginBottom: 32,
    marginHorizontal: 16,
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
  flatList: {
    position: "relative",
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 147,
  },
  content: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    paddingTop: 92,
    borderTopRightRadius: 25,
    height: "100%",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  item: {
    backgroundColor: "#F6F6F6",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontFamily: "Montserrat-Bold",
    color: "#212121",
    fontSize: 16,
    marginBottom: 11,
  },
});
