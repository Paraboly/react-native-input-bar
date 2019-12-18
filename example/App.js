import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import InputBar from "@paraboly/react-native-input-bar";

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
