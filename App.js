import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from './components/Button' ;

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Charlie</Text>
        <StatusBar style="auto" />
      <Button onPress={() => Alert.alert("Ceci est un bouton")} text="Ceci est un Texte"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App ;