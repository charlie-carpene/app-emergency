import NetInfo from '@react-native-community/netinfo';

const isConnected = async () => {
  const response = await NetInfo.fetch();
  const data = await response.isConnected;
  return data;
}
export default isConnected;