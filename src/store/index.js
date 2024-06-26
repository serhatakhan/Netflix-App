import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import movieReducer from './slice/movieSlice';

// configureStore, middleware'leri varsayılan olarak içerir.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
  },
});
