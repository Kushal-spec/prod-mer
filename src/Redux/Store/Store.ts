import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../DataStorage/DataStorageSlice';

export const store = configureStore({
  reducer: {
    movie_name: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
