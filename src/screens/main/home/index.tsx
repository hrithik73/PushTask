import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loader from '~/components/Loader';
import { useNFTs } from '~/hooks/useQuery';
import { useAppTheme } from '~/theme/theme';
import makeStyles from './styles';
import { ListItem } from '~/components/ListItem';

const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useNFTs();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>All NFTs</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={data?.pages.map(page => page?.items).flat()}
          renderItem={({ item }) => {
            const itemData = {
              ownerId: item?.nft_data?.original_owner,
              name: item?.nft_data?.external_data?.name,
              image: item?.nft_data?.external_data?.image_512,
            };
            return <ListItem {...itemData} />;
          }}
          estimatedItemSize={300}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          ListFooterComponent={() => {
            return <>{isFetchingNextPage && <Loader />}</>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
