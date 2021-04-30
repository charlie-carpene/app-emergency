import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
import numberHandler from './tools/numberHandler';
import fetchCountry from './tools/fetchCountry';

const App = () => {
 
  const [number, setNumber] = useState(fetchCountry());
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={() => numberHandler(number) } text="phone.call"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App ;