import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import movieReducer from './slice/movieSlice';
import favoritesReducer from './slice/favoritesSlice';

// configureStore, middleware'leri varsayılan olarak içerir.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
    favorites: favoritesReducer,
  },
});
