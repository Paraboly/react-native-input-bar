import React from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';
import InputBar from './build/dist/InputBar';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <InputBar multiline height={null} />
      </SafeAreaView>
    </>
  );
};

export default App;
