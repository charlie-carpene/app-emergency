import NetInfo from '@react-native-community/netinfo';
import fetchApi from '../fetchApi';

const updateDatabase = () => {
    NetInfo.fetch().then(state => {
        if (state.isConnected) {
            fetchApi();
        } else {
            console.log("Not connected");
        };
    });
};

export default updateDatabase;