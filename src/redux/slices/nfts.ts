import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INftItem } from '~/types/nfts';

export interface IUserSliceStore {
  nfts: Array<INftItem>;
}

const initialState: IUserSliceStore = {
  nfts: [],
};

export const userSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    bookmarkNTF: (state, action: PayloadAction<INftItem>) => {
      // Logic to check weather , NFT is already bookmarked or not
      const index = state.nfts.findIndex(
        e => e.ownerId === action.payload.ownerId,
      );
      if (index > -1) {
        // Item found at index
        state.nfts.splice(index, 1);
        return;
      }
      // incase no item found
      state.nfts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { bookmarkNTF } = userSlice.actions;

export default userSlice.reducer;
