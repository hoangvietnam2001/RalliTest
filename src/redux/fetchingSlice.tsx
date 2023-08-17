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
const selectedItem = createSlice({
	name: 'SelectedItem',
	initialState: {
	  selectedItem: null,
	},
	reducers: {
	  setSelectItem: (state, action) => {
		state.selectedItem = action.payload;
	  },
	},
  });
const CODEScan = createSlice({
	name:'CODEScan',
	initialState:{
		CODE: '',
		navigationFrom: 0,
		STATUS: {},
	},
	reducers:{
		SetCODE: (state, action) =>{
			state.CODE = action.payload;
		},
		setNavigationFrom: (state, action) =>{
			state.navigationFrom = action.payload
		},
		setSTATUS: (state, action)=>{
			state.STATUS = action.payload;
		}
	}
})
export const {setIsFetching} = fetchingSlice.actions;
export const { setSelectItem } = selectedItem.actions;
export const {SetCODE} = CODEScan.actions;
export const {setNavigationFrom} = CODEScan.actions;
export const {setSTATUS} = CODEScan.actions;
export const selectedItemReducer = selectedItem.reducer;
export const CODE = CODEScan.reducer;
export default fetchingSlice.reducer;
