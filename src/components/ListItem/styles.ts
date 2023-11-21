import { Dimensions, StyleSheet } from 'react-native';
import { AppTheme } from '~/theme/theme';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    heading: {
      color: theme.colors.text,
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 10,
    },
    listContainer: {
      flex: 1,
      width: Dimensions.get('screen').width,
    },
    listItemContainer: {
      margin: 10,
      padding: 10,
      backgroundColor: theme.colors.backdrop,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nftName: {
      fontSize: 20,
      fontWeight: '700',
      paddingVertical: 10,
      color: theme.colors.text,
    },
    ownerAddress: {
      color: theme.colors.text,
    },
    listItemImage: {
      height: 200,
      width: '100%',
      objectFit: 'contain',
      borderRadius: 5,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;
