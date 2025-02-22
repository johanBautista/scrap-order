import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open your mind :b </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
