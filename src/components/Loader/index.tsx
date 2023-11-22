import { View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useAppTheme } from '~/theme/theme';
import { makeStyles } from './styles';

const Loader = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
};
export default Loader;
