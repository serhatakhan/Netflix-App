import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import widgets from '../../widgets/widgets.json';
import Section from '../../components/home/section';
import {useDispatch} from 'react-redux';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../../store/actions/movieActions';
import HeroCarousel from '../../components/home/heroCarousel';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
  }, []);

  return (
      <View style={screenStyle.container}>
        <FlatList
          ListHeaderComponent={<HeroCarousel />}
          data={widgets}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Section item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
  );
};

export default Home;
