import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function App() {
  const url =
    "https://beta.mercadopago.com.ar/checkout/v1/beta11/redirect?preference-id=239658604-b510de5e-f8e4-4073-90eb-b00245a0c49e&device-override=mobile&deeplink=true";
  return (
    <View style={styles.container}>
      <Button title="Open Browser" onPress={() => openBrowserAsync(url)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
