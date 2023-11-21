import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './routes';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'HomeScreen'}
        component={Home}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
