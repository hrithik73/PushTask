import { CONTRACT_ADDRESS } from '@env';
import { useInfiniteQuery, useQuery } from 'react-query';
import { api } from '~/config/api';

const useNFTs = () => {
  return useInfiniteQuery({
    queryKey: ['nfts'],
    queryFn: async () => {
      const res = await api.get(
        `/eth-mainnet/nft/${CONTRACT_ADDRESS}/metadata/`,
        {
          params: {
            'page-size': 10,
            'page-number': 10,
          },
        },
      );
      return res.data?.data;
    },
    getNextPageParam: lastPage => {
      console.log('lastPage');
    },
    onError: error => {
      console.log({ error });
    },
  });
};

export { useNFTs };
