import {createSlice} from '@reduxjs/toolkit';
import {addFavoriteMovie, fetchFavoriteMovie} from '../actions/favoriteActions';

// slice, state'in bir parçasını ve bu state'i değiştiren reducer fonksiyonlarını tanımlar.
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesMovies: null,
    pending: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // * bu 3'lü, seçilen filmi backendde favorilere eklemekle ilgili. o yüzden,
      // pending, error, veya başarılı gitme durumunda state'in nasıl güncelleneceğini takip etme ihtiyacı duymadık !!
      .addCase(addFavoriteMovie.pending, state => {})
      .addCase(addFavoriteMovie.fulfilled, (state, action) => {})
      .addCase(addFavoriteMovie.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(fetchFavoriteMovie.pending, state => {
        state.pending = true;
      })
      .addCase(fetchFavoriteMovie.fulfilled, (state, action) => {
        (state.favoritesMovies = action.payload.results), // results yazarak ulaşabiliyoruz
          (state.pending = false);
      })
      .addCase(fetchFavoriteMovie.rejected, (state, action) => {
        (state.error = action.payload), (state.pending = false);
      });
  },
});

export default favoriteSlice.reducer;
