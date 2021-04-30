import React from 'react';
import { TouchableOpacity, Text, Linking, Platform, View, StyleSheet } from 'react-native';

const numberHandler = ( number ) => {
  
  if (Platform.OS === 'android') {
    Linking.openURL(`tel:${number}`) ;
  } else {
    Linking.openURL(`telprompt:${number}`) ;
  };
} ;

export default numberHandler ;