import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Loader = () => {
  return (
    <ActivityIndicator
      style={{ margin: 20 }}
      animating={true}
      color={MD2Colors.red800}
    />
  );
};
export default Loader;
