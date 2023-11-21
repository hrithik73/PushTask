import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';

import { useAppTheme } from '~/theme/theme';
import { useNFTs } from '~/hooks/useQuery';
import Loader from '~/components/Loader';
import makeStyles from './styles';

// TODO: Make the types for Item
const ListItem = ({ item }: any) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.listItemContainer}>
      <FastImage
        source={{ uri: item?.nft_data?.external_data?.image_512 }}
        style={styles.listItemImage}
      />
      <Text style={styles.nftName}>{item?.nft_data?.external_data?.name}</Text>
      <Text style={styles.ownerAddress}>{item?.nft_data?.original_owner}</Text>
    </View>
  );
};

const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useNFTs();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All NFTs</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={data?.pages.map(page => page?.items).flat()}
          renderItem={({ item }) => <ListItem item={item} />}
          estimatedItemSize={300}
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
    </View>
  );
};

export default Home;
