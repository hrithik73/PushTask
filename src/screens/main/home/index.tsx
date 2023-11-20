import React from 'react';
import { Text, View } from 'react-native';

import { useAppTheme } from '~/theme/theme';
import makeStyles from './styles';

const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        List of Examples to implemented in the app
      </Text>
    </View>
  );
};

export default Home;
