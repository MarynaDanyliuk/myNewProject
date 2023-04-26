import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";

import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

import db from "../../firebase/config";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
// import { storage } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function CreatePostScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [comment, setComment] = useState("");

  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("Waiting..");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      } else {
        console.log(status);
        setStartCamera(true);
        setLocationName(status);
      }
    })();
  }, []);

  const takePhoto = async () => {
    if (!camera) return;
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    // console.log(location);
    // console.log("latitude", location.coords.latitude);
    // console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    setLocation(location);
    // console.log(photo.uri);
  };

  const sendPhoto = () => {
    uploadPostToServer();
    navigation.navigate("PostsScreen", {
      screen: "Home",
      params: { photo },
    });
    // console.log(navigation);
    reset();
  };

  const reset = () => {
    setLocationName("");
    setComment("");
    setPhoto(null);
  };

  const uploadPostToServer = async () => {
    try {
      const photo = await uploadPhotoToServer();
      const createPost = await db.firestore().collection("posts").add({
        photo,
        comment,
        location: location.coords,
        userId,
        nickname,
        locationName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    await db.storage().ref(`postImage/${uniquePostId}`).put(file);

    const processedPhoto = await db
      .storage()
      .ref(`postImage`)
      .child(uniquePostId)
      .getDownloadURL();

    return processedPhoto;
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
            value={comment}
            onChangeText={setComment}
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
          onPress={sendPhoto}
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
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: "#BDBDBD",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Montserrat-Regular",
    color: "#FFFFFF",
  },
});

// export default CreatePostScreen;
