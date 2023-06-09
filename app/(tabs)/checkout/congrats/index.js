import { StyleSheet, View, Text } from "react-native";
import React from "react";

const congrats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Custom Congrats</Text>
      <Text>Congrats on the seller application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
});

export default congrats;
