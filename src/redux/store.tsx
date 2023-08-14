// store.js
import { configureStore } from '@reduxjs/toolkit';
import isFetchingReducer from './fetchingSlice';

const store = configureStore({
  reducer: {
    isFetching: isFetchingReducer,
  },
});

export default store;