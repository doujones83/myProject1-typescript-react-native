import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './slices';
import {persistCombineReducers, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default persistor;