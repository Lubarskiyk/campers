import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterCampers: {
    carTypes:"1",
    equipments:[]
  },
};

const filterSlice = createSlice({
  name: 'filtercampers',
  initialState,
  reducers: {
    filterCampers: (state, action) => {
      state.filtercampers = action.payload

    },
  },
});

export const { filterCampers } = filterSlice.actions;
export default filterSlice.reducer;
