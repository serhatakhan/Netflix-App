import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';

const MovieCard = ({item}) => {
  return (
    <View style={styles.container}>
      {/* FastImage, React Native uygulamalarında görüntü yükleme işlemlerini hızlandırmak ve optimize etmek için kullanılan bir bileşendir. */}
      <FastImage
        style={{width: width * 0.3, height: height * 0.22, borderRadius: 4}}
        source={{
          uri: `${IMAGE_BASE_URL}` + `${item.poster_path}`,
          // headers: {Authorization: `Bearer ${token}`},
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
          // web: Sunucu tarafında sık sık güncellenen görüntüler için uygundur. / cacheOnly: Görsellerin en güncel haliyle yüklenmesini sağlar.Yalnızca önbellekten görüntüleri gösterir, herhangi bir ağ isteğinde bulunmaz.
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text numberOfLines={1} style={{color: 'white', paddingTop: 3}}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.3,
  },
});

export default MovieCard;
