import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
// import InputBar from "@paraboly/react-native-input-bar";
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
        <View
          style={{
            flex: 1,
            marginBottom: 32,
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <InputBar
          // disableSecondaryIcon
          // multiline
          // height={null}
          // minHeight={50}
          // spinnerVisibility={true}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
