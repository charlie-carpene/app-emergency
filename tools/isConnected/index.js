import NetInfo from '@react-native-community/netinfo';

const isConnected = () => {
  NetInfo.fetch().then(state => {
      return state.isConnected;
  });
}
export default isConnected;