import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CustomTab from "./(tabs)/customtabs";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Web Browser</Text>
      <Text style={styles.subtitle}>POC</Text>
      <CustomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0f0f0f",
  },
  subtitle: {
    fontSize: 24,
    color: "#777",
    marginBottom: 24,
  },
  link: {
    fontSize: 32,
    color: "#0000FF",
  },
});
