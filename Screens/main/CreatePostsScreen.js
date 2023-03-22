import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

// const initialState = {
//   login: "",
//   email: "",
//   password: "",
// };

export default function CreatePostScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [type, setType] = useState(CameraType.back);

  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      } else {
        console.log(status);
        setStartCamera(true);
      }
    })();
  }, []);

  // locationName = "Waiting..";
  // if (errorMsg) {
  //   locationName = errorMsg;
  // } else if (location) {
  //   locationName = JSON.stringify(location);
  // }

  const takePhoto = async () => {
    if (!camera) return;
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    setLocation(location);
    console.log(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("PostsScreen", { photo });
    console.log(navigation);
    reset();
  };

  const reset = () => {
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto}>
          <Feather name="camera" size={32} color="white" />
        </TouchableOpacity>
      </Camera>
      <TouchableOpacity style={styles.loadСontainer}>
        <Text style={styles.loadText} onPress={sendPhoto}>
          Загрузите фото
        </Text>
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
            value={locationName}
            onChangeText={setLocationName}
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
    backgroundColor: "#BDBDBD",
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
    color: "grey",
  },
  form: {
    marginTop: 32,
  },
  input: {
    color: "#BDBDBD",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    // fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: "#BDBDBD",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    // fontFamily: "Montserrat-Regular",
    color: "#FFFFFF",
  },
});

// ______________________________________
// function toggleCameraType() {
//   setType((current) =>
//     current === CameraType.back ? CameraType.front : CameraType.back
//   );
// }
