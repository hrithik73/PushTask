import React from 'react';
import { Pressable, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useAppTheme } from '~/theme/theme';
import makeStyles from './styles';
import { INftItem } from '~/types/nfts';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { bookmarkNTF } from '~/redux/slices/nfts';
import images from '~/config/image';

export const ListItem = (item: INftItem) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const dispatch = useAppDispatch();
  const { nfts } = useAppSelector(state => state.nfts);

  return (
    <View style={styles.listItemContainer}>
      <FastImage
        source={item?.image ? { uri: item?.image } : images.no_image}
        style={styles.listItemImage}
        defaultSource={images.no_image}
      />
      <Text style={styles.nftName}>{item?.name}</Text>
      <Text style={styles.ownerAddress}>{item?.ownerId}</Text>
      <Pressable
        style={{ alignSelf: 'flex-end' }}
        onPress={() => {
          dispatch(bookmarkNTF(item));
        }}>
        <Ionicons
          color={theme.colors.white}
          name={
            nfts.some(nft => nft.ownerId === item?.ownerId)
              ? 'bookmark'
              : 'bookmark-outline'
          }
          size={30}
        />
      </Pressable>
    </View>
  );
};
