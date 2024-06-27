import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {appColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {MOVIELIST} from '../../utils/routes';

const SectionHeader = props => {
  const navigation = useNavigation();
  const {title} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate(MOVIELIST)}>
        <Text style={[styles.title, styles.seeAll]}>See All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5
  },
  title: {
    color: appColors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
  seeAll: {
    color: appColors.YELLOW,
  },
});

export default SectionHeader;
