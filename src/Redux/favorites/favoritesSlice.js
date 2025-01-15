import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: {},
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      state.favorites[action.payload] = state.favorites[action.payload]
        ? !state.favorites[action.payload]
        : true;

    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
