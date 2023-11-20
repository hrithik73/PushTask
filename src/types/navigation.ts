import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackType = {
  Home: undefined;
  Saved: undefined;
};

export type RootStackNavigatorProps = BottomTabNavigationProp<RootStackType>;
