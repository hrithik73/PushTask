import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackType = {
  Home: undefined;
  Bookmark: undefined;
};

export type RootStackNavigatorProps = BottomTabNavigationProp<RootStackType>;
