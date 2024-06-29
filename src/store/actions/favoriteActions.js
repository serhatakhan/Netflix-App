import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../service/request';
import {ACCOUNT_URL, ADD_FAVORITE_URL, BASE_URL, FAVORITE_URL} from '../../service/urls';
import {ACCOUNT_ID} from '../../utils/constants';
import { Alert } from 'react-native';

// seçilen filmi favorilere ekleyen action. bir de eklenen filmi getiren action yazmamız gerek
const addFavoriteMovie = createAsyncThunk(
  'favorites/addFavoriteMovie',
  async value => {
    // const url = BASE_URL + ACCOUNT_URL + ACCOUNT_ID + ADD_FAVORITE_URL -> bu yöntem de olur alttaki yöntem de olur !
    const url = `${BASE_URL}${ACCOUNT_URL}${ACCOUNT_ID}${ADD_FAVORITE_URL}`;
    const res = await postRequest(url, value);
    Alert.alert("added to favorites")
    return res.data;
  },
);
// favorilere eklenen filmi getiren action
const fetchFavoriteMovie = createAsyncThunk(
  'favorites/fetchFavoriteMovie',
  async () => {
    const url = `${BASE_URL}${ACCOUNT_URL}${ACCOUNT_ID}${FAVORITE_URL}`;
    const res = await getRequest(url);
    return res.data;
  },
);

export {addFavoriteMovie, fetchFavoriteMovie};
