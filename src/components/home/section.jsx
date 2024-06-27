import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SectionHeader from '../ui/sectionHeader';
import {useSelector} from 'react-redux';
import MovieCard from './movieCard';

const Section = props => {
  const {item} = props;
  const {upcomingMovies} = useSelector(state => state.movies);
  console.log(upcomingMovies);

  return (
    <View>
      <SectionHeader title={item.title} />
      <FlatList
        contentContainerStyle={{marginBottom: 15}}
        horizontal
        data={upcomingMovies}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default Section;
