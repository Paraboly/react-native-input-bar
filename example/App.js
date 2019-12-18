import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import InputBar from "./lib/src/InputBar";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        <InputBar />
      </SafeAreaView>
    </>
  );
};

export default App;
