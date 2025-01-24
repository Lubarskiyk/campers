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
    items: [],
    isLoading: true,
    error: null,
    totalCampers: 0,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalCampers = action.payload.data.total;

        if (action.payload.page === 1) {
          state.items = action.payload.data.items;
        } else {
          state.items.push(...action.payload.data.items);
        }
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
