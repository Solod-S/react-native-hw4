import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";

export const CreateScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("PostsScreen", { name: "Jane" })}
      />
      <View style={styles.container}>
        <Text>CreateScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateScreen;
