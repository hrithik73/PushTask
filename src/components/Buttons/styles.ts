import { StyleSheet } from 'react-native';
import { AppTheme } from '~/theme/theme';

export const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: theme.colors.primary,
      width: '80%',
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tittle: {
      color: theme.colors.white,
      fontWeight: '400',
      fontSize: 15,
    },
  });
