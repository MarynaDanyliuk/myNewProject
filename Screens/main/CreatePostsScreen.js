import React from "react";
import { View, Text } from "react-native";

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>;
    </View>
  );
};
export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
