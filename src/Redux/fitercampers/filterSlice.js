import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterCampers: {
    query: '',
  },
};

const filterSlice = createSlice({
  name: 'filtercampers',
  initialState,
  reducers: {
    filterCampers: (state, action) => {
      state.filterCampers.query = action.payload;
    },
  },
});

export const { filterCampers } = filterSlice.actions;
export default filterSlice.reducer;
