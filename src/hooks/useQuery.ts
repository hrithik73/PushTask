import { CONTRACT_ADDRESS } from '@env';
import { useInfiniteQuery, useQuery } from 'react-query';
import { api } from '~/config/api';
import { PAGE_SIZE } from '~/constants/appConstant';

const useNFTs = () => {
  return useInfiniteQuery({
    queryKey: ['nfts'],
    queryFn: async pageNumber => {
      console.log(pageNumber?.pageParam);
      const res = await api.get(
        `/eth-mainnet/nft/${CONTRACT_ADDRESS}/metadata/`,
        {
          params: {
            'page-size': PAGE_SIZE,
            'page-number': pageNumber?.pageParam ?? 10,
          },
        },
      );
      return res.data?.data;
    },
    getNextPageParam: data => {
      if (data?.pagination?.has_more) {
        return data?.pagination?.page_number + PAGE_SIZE;
      }
    },
    onError: error => {
      console.log({ error });
    },
  });
};

export { useNFTs };
