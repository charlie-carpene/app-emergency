import isConnected from '../isConnected';
import fetchApi from '../fetchApi';
import {Alert} from 'react-native';


const updateDatabase = () => {
    Alert.alert (isConnected());
    console.log(isConnected());
};

export default updateDatabase;