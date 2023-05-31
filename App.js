import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function App() {
  const url =
    "https://beta.mercadopago.com.ar/checkout/v1/beta9/redirect/sniffing?preference-id=239658604-61d81820-4089-4ef1-9824-8bab1817669b&device-override=mobile&deeplink=true";
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
