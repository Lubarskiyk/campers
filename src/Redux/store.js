import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoritesReducer from './favorites/favoritesSlice.js';
import campersReducer from './catalog/slice.js';
import filterCampersReducer from './fitercampers/filterSlice.js';

const persistedFavoritesReducer = persistReducer(
  {
    key: 'favorites',
    storage,
  },
  favoritesReducer
);

const persistedFilterCampersReducer = persistReducer(
  {
    key: 'filter',
    storage,
  },
  filterCampersReducer
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    campers: campersReducer,
    filtercampers: persistedFilterCampersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
