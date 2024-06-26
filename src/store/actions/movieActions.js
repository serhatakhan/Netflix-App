import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/request';
import {UPCOMING_URL} from '../../service/urls';

const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', async () => {
  const res = await getRequest(UPCOMING_URL);
  return res.data;
});

export {fetchUpcomingMovies};

