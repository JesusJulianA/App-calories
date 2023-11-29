import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";

export default function App():JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}} >
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
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
