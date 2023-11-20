import { createSlice } from '@reduxjs/toolkit';

export interface IUserSliceStore {
  isDarkTheme: boolean;
}

const initialState: IUserSliceStore = {
  isDarkTheme: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
