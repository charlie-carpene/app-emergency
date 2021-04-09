import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Linking, Platform } from 'react-native';
import Button from './components/Button' ;

const App = () => {
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = "tel:${0638666801}";
  } else {
    phoneNumber = "telprompt:${0638666801}";
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={() => Linking.openURL(phoneNumber)} text="phone.call"/>
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