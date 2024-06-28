import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';
import {useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient'
import HeroButtons from './heroButtons';
import { appColors } from '../../theme/colors';

const HeroCarousel = () => {
  const {popularMovies} = useSelector(state => state.movies);
  console.log(popularMovies);

  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={false}
        style={{height: height * 0.6}}
        showsButtons={false}
        autoplay={true}>
        {popularMovies.map((item, index) => (
          <View key={index}>
            <FastImage
              style={{
                width: width*0.95,
                height: height * 0.6,
                borderRadius: 4,
              }}
              source={{
                uri: `${IMAGE_BASE_URL}` + `${item.poster_path}`,
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.web,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={{position: "relative"}}>
                <View style={styles.detail}>
                    <Text style={styles.text}>{item.original_title}</Text>
                    <HeroButtons />
                </View>
                <LinearGradient 
                    colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]} 
                    style={{width: width, height: height*0.5, position: "absolute", bottom: 0}}
                    // Geçişin başlangıç noktasını belirler. {x: 0.5, y: 0} ile ortada yatay olarak (x: 0.5), ve üstte dikey olarak (y: 0) başlar.
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
              />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  text: {
    color: appColors.GRAY2,
    fontSize: 23,
    fontWeight: "600",
    textAlign: "center",
    width: "95%", // genişlik vererek ortalanmama sorununu çözüldü
  },
  detail: {
    position: "absolute", 
    bottom: 20, 
    zIndex: 50, 
    gap: 10,
    width: "100%", // genişlik vererek ortalanmama sorununu çözüldü,
  }
});

export default HeroCarousel;
