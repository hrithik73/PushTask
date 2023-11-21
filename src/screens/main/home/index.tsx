import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { useAppTheme } from '~/theme/theme';
import makeStyles from './styles';
import { useNFTs } from '~/hooks/useQuery';

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
    return (
      <View style={styles.loader}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List ot NFTs</Text>
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
        />
      </View>
    </View>
  );
};

export default Home;
