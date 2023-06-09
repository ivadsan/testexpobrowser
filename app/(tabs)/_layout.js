import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false, href: "/" }} />
      <Tabs.Screen name="customtabs" options={{ headerShown: false }} />
    </Tabs>
  );
};
