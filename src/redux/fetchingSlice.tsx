import {createSlice} from '@reduxjs/toolkit';

const fetchingSlice = createSlice({
	name: 'isFetching',
	initialState: {
		isFetching: false,
	},
	reducers: {
		setIsFetching: (state, action) => {
			state.isFetching = action.payload;
		},
	},
});

export const {setIsFetching} = fetchingSlice.actions;
export default fetchingSlice.reducer;
