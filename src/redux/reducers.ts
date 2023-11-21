import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import user from './slices/user';
import nfts from './slices/nfts';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user,
  nfts: nfts,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
