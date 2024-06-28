import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PlayIcon from 'react-native-vector-icons/FontAwesome6';
import {appColors} from '../../theme/colors';

const HeroButtons = () => {
  return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <Icon name="info" size={24} color={appColors.GRAY2} />
          <Text style={{color: appColors.GRAY2, fontSize: 12}}>Info</Text>
        </View>

        <View style={styles.play}>
          <PlayIcon name="play" size={23} color={appColors.PRIMARY} />
          <Text style={{color: appColors.PRIMARY, fontSize: 12}}>Play</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <Icon name="plus" size={25} color={appColors.GRAY2} />
          <Text style={{color: appColors.GRAY2, fontSize: 12}}>Favorites</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    width: "95%",
  },
  play: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.GRAY2,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 4,
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 4
  },
});

export default HeroButtons;
