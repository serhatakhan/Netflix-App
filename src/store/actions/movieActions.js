import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/request';
import {NOW_PLAYING_URL, POPULAR_URL, TOP_RATED_URL, UPCOMING_URL} from '../../service/urls';

const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', async () => {
  const res = await getRequest(UPCOMING_URL);
  return res.data;
});
const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', async () => {
  const res = await getRequest(TOP_RATED_URL);
  return res.data;
});
const fetchNowPlayingMovies = createAsyncThunk('movies/fetchNowPlayingMovies', async () => {
  const res = await getRequest(NOW_PLAYING_URL);
  return res.data;
});
const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
  const res = await getRequest(POPULAR_URL);
  return res.data;
});

export {fetchUpcomingMovies, 
  fetchTopRatedMovies, 
  fetchNowPlayingMovies, 
  fetchPopularMovies
};

