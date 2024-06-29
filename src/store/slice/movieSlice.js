import {createSlice} from '@reduxjs/toolkit';
import {fetchMovieDetail, fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, removeDetailData} from '../actions/movieActions';

// slice, state'in bir parçasını ve bu state'i değiştiren reducer fonksiyonlarını tanımlar.
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    upcomingMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
    popularMovies: [],
    movieDetailData: null,
    pendingDetail: false,
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
      })

      .addCase(fetchTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.topRatedMovies = action.payload.results);
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })

      .addCase(fetchNowPlayingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.nowPlayingMovies = action.payload.results);
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })

      .addCase(fetchPopularMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.popularMovies = action.payload.results);
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })

      .addCase(fetchMovieDetail.pending, state => {
        state.pendingDetail = true;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        (state.pendingDetail = false),
          (state.movieDetailData = action.payload); // üsttekiler gibi .result demedik. çünkü .result'ın içinde değil veriler
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        (state.pendingDetail = false), (state.error = action.payload.message);
      })

      // detayı görülen filmden geri çıkıldığında görüntülenen veriyi silmek için:
      .addCase(removeDetailData.fulfilled, (state, action) => {
        (state.movieDetailData = action.payload); // yani null döndürsün dedik actionu null döndürüyor
      });
  },
});

export default movieSlice.reducer;
