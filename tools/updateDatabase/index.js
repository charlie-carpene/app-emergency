import isConnected from '../isConnected';
import fetchApi from '../fetchApi';
import { Alert } from 'react-native';

const updateDatabase = async () => {
    if (await isConnected()) {
        try {
            console.log("Data to be stored localy :", await fetchApi());
        } catch (error) {
            Alert.alert("Problem :", error);
            console.log("Problem :", error);
        }
    } else {
        Alert.alert("No network available");
        console.log("No network available");
    }
};

export default updateDatabase;