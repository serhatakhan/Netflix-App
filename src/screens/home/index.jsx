import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import widgets from '../../widgets/widgets.json';
import Section from '../../components/home/section';
import {useDispatch} from 'react-redux';
import { fetchUpcomingMovies } from '../../store/actions/movieActions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies())
  }, [])
  
  return (
    <View style={screenStyle.container}>
      <FlatList
        data={widgets}
        renderItem={({item}) => <Section item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
