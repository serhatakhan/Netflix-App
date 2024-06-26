import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SectionHeader from '../ui/sectionHeader';
import {useSelector} from 'react-redux';

const Section = props => {
  const {item} = props;
  const {upcomingMovies} = useSelector(state => state.movies);
  console.log(upcomingMovies);

  return (
    <View style={styles.container}>
      <SectionHeader title={item.title} />
      <FlatList
      horizontal
      data={upcomingMovies}
      renderItem={({item})=> <Text style={{color: "white"}}>{item.title}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
});

export default Section;
