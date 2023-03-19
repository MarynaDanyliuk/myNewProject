import React from "react";
import { View, Text } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>;
    </View>
  );
};
export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
