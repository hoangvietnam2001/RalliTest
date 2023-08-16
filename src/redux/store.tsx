// store.js
import { configureStore } from '@reduxjs/toolkit';
import isFetchingReducer, {  CODE, selectedItemReducer} from './fetchingSlice';

const store = configureStore({
  reducer: {
    isFetching: isFetchingReducer,
    selectedItem: selectedItemReducer,
    CODE: CODE,
  },
});

export default store;