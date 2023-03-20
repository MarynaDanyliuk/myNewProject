import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function CreatePostScreen() {
  return (
    // <View style={styles.container}>
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS == "ios" ? "padding" : "height"}
    //   >
    //     <View>
    //       <Text style={styles.screen_title}>Create Post Screen</Text>
    //     </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.loadСontainer}>
        <Text style={styles.loadText}>Загрузите фото</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <View style={{ marginBottom: 31 }}>
          <TextInput
            style={styles.input}
            placeholder="Название"
            // value={}
            // onChangeText={}
          />
        </View>
        <View style={{ marginBottom: 32 }}>
          <TextInput
            style={styles.input}
            placeholder="Местность"
            // value={}
            // onChangeText={}
          />
        </View>
        <TouchableHighlight
          style={styles.submitBtn}
          // onPress={}
          underlayColor="#FF6C00"
        >
          <Text style={styles.btnText}>Опубликовать</Text>
        </TouchableHighlight>
      </View>
    </View>
    //   </KeyboardAvoidingView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  camera: {
    borderRadius: 8,
    height: 240,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  cameraIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderWidth: 1,
    borderColor: "#ffff",
    backgroundColor: "white",
    borderRadius: 8,
  },
  loadСontainer: {
    marginTop: 8,
  },
  loadText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  form: {
    marginTop: 32,
  },
  input: {
    color: "#BDBDBD",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  submitBtn: {
    backgroundColor: "#BDBDBD",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    // fontFamily: "roboto-regular",
    color: "#FFFFFF",
  },
});
