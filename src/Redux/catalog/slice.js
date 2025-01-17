import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations.js';

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: 'campers',
  initialState: {
    items: null,
    isLoading: true,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
  reducers: {
    clearData: state => {
      state.isLoading = false;
      state.error = null;
      state.items = null;
    },
  },
});
export default slice.reducer;
