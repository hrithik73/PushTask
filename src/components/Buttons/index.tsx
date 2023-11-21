import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';
import { useAppTheme } from '~/theme/theme';
import { makeStyles } from './styles';

interface IButton {
  title: string;
  onPress: () => void;
  customStyles?: ViewStyle;
}
//TODO:- basic button, further customization can be done
const Button = ({ title, onPress, customStyles }: IButton) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable style={[styles.container, customStyles]} onPress={onPress}>
      <Text style={styles.tittle}>{title}</Text>
    </Pressable>
  );
};
export default Button;
