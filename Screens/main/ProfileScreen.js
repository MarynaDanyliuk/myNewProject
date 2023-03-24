import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.image}
      >
        <View
          style={{
            ...styles.form_registration,
          }}
        >
          <View style={styles.wrapper_avatar}>
            <View style={styles.avatar}></View>
          </View>
          <Text style={styles.screen_title}>Mary Danyliuk</Text>
          <View style={styles.post}>
            <View style={styles.post_photo}></View>
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
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen_title: {
    fontFamily: "Montserrat-Regular",
    color: "#212121",
    fontSize: "30px",
    lineHeight: "35.16px",
    textAlign: "center",
    marginBottom: 33,
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
    top: -60,
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
});
