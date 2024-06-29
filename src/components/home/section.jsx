import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import SectionHeader from '../ui/sectionHeader';
import {useSelector} from 'react-redux';
import MovieCard from './movieCard';

const Section = props => {
  const {item} = props;
  const {upcomingMovies, topRatedMovies, nowPlayingMovies, popularMovies} = useSelector(state => state.movies);
  // console.log(upcomingMovies);

  // * hazırladığımız widget.json dosyasına göre gelen filmleri ekranda ilgili yerde göstereceğiz.
  // getData fonksiyonu, item.value değerine bağlı olarak doğru film listesini döndürüyor. hazırladığımız bu fonksiyonu aşağıdaki flatlist'in datasına vereceğiz.
  const getData = () => {
    switch (item.value) {
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
    <View>
      <SectionHeader title={item.title} value={item.value} />
      <FlatList
        contentContainerStyle={{marginBottom: 20}}
        horizontal
        data={getData()}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default Section;
