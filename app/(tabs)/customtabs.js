import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Linking, Platform } from "react-native";
import { openBrowserAsync } from "expo-web-browser";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";

export default function CustomTab() {
  useEffect(() => {
    Linking.addEventListener("url", (event) => {
      const { url } = event;
      if (url !== null && url.includes("myapp://")) {
        Platform.OS === "ios" && WebBrowser.dismissBrowser();
      }
    });
  }, []);

  const url =
    "https://beta.mercadopago.com.ar/checkout/v1/beta11/redirect?preference-id=239658604-a222518f-db60-4278-af59-f94ca88c4472&device-override=mobile&deeplink=true";
  return (
    <View>
      <Button title="Open Browser" onPress={() => openBrowserAsync(url)} />
      <StatusBar style="auto" />
    </View>
  );
}
