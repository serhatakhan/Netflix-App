import React, {Component} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';
import { appColors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/routes';

const MovieListCard = ({item}) => {
  const navigation = useNavigation()
  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
      <FastImage
        style={{width: width * 0.44, height: height * 0.35}}
        source={{
          uri: `${IMAGE_BASE_URL}` + `${item.poster_path}`,
          // headers: {Authorization: `Bearer ${token}`},
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.web,
          // web: Sunucu tarafında sık sık güncellenen görüntüler için uygundur. / cacheOnly: Görsellerin en güncel haliyle yüklenmesini sağlar.Yalnızca önbellekten görüntüleri gösterir, herhangi bir ağ isteğinde bulunmaz.
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text numberOfLines={1} style={{color: appColors.WHITE, fontSize: 16, fontWeight: "600"}}>
        {item.original_title}
      </Text>
      <Text numberOfLines={3} style={{color: appColors.GRAY2, fontSize: 12, margin: 5}}>
        {item.overview}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.48,
  },
});

export default MovieListCard;
