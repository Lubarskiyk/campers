import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersById } from './operations.js';

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: 'campersid',
  initialState: {
    items: null,
    isLoading: true,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampersById.pending, handlePending)
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampersById.rejected, handleRejected);
  },
});
export default slice.reducer;
