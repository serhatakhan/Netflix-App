import React, {Component, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {appColors} from '../../theme/colors';
import MovieListCard from '../../components/movieList/movieListCard';
import {fetchFavoriteMovie} from '../../store/actions/favoriteActions';

const Favorites = () => {
  const dispatch = useDispatch();
  const {favoritesMovies} = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchFavoriteMovie());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={favoritesMovies}
        renderItem={({item}) => <MovieListCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.PRIMARY,
  },
});

export default Favorites;
