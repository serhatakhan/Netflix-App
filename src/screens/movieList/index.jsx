import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {appColors} from '../../theme/colors';
import MovieListCard from '../../components/movieList/movieListCard';

const MovieList = props => {
  const {value} = props?.route?.params;
  const {upcomingMovies, topRatedMovies, nowPlayingMovies, popularMovies} =
    useSelector(state => state.movies);

  const getData = () => {
    switch (value) {
      case 'upcoming':
        return upcomingMovies;
      case 'top_rated':
        return topRatedMovies;
      case 'now_playing':
        return nowPlayingMovies;
      default:
        return popularMovies;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={getData()}
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

export default MovieList;
