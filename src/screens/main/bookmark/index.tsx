import React from 'react';
import { Text, View } from 'react-native';

import { useAppTheme } from '~/theme/theme';
import makeStyles from '../home/styles';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '~/redux/store';
import { ListItem } from '~/components/ListItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const Bookmark = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const { nfts } = useAppSelector(state => state.nfts);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Your Boookmarks</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={nfts}
          renderItem={({ item }) => {
            return <ListItem {...item} />;
          }}
          estimatedItemSize={300}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
