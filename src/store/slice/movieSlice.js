import {createSlice} from '@reduxjs/toolkit';
import {fetchUpcomingMovies} from '../actions/movieActions';

// slice, state'in bir parçasını ve bu state'i değiştiren reducer fonksiyonlarını tanımlar.
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    upcomingMovies: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUpcomingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.upcomingMovies = action.payload.results);
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      });
  },
});

export default movieSlice.reducer;
