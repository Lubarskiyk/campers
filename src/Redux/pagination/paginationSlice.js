import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pagination: {
    page:1,
    limit:4
  },
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    pagination: (state, action) => {
      state.pagination.page = action.payload;
    },
  },
});

export const { pagination } = paginationSlice.actions;
export default paginationSlice.reducer;
