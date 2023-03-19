import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View>
          <Text style={styles.screen_title}>Post Screen</Text>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen_title: {
    fontFamily: "Montserrat-Regular",
    color: "#212121",
    fontSize: "30px",
    lineHeight: "35.16px",
    textAlign: "center",
    marginBottom: 33,
    marginTop: 32,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
