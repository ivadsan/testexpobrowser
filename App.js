import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Open Browser"
        onPress={() =>
          openBrowserAsync(
            "https://beta.mercadopago.com.ar/checkout/v1/beta9/redirect?preference-id=239658604-6a98fa75-e786-48ea-9e55-3e3e018498c7&device-override=mobile"
          )
        }
      />
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
