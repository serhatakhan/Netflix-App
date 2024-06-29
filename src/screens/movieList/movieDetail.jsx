import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable, Alert} from 'react-native';
import {appColors} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMovieDetail,
  removeDetailData,
} from '../../store/actions/movieActions';
import Spinner from '../../components/ui/spinner';
import FastImage from 'react-native-fast-image';
import {height, width} from '../../utils/constants';
import {IMAGE_BASE_URL} from '../../service/urls';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { addFavoriteMovie, fetchFavoriteMovie } from '../../store/actions/favoriteActions';

const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  // * navigation.navigate(MOVIEDETAIL, {movieId: item.id} -> şeklinde bu sayfaya yönlendik 2 farklı sayfadan.
  // yönlenirken aynı yazdığımızdan emin olmalıyız. yoksa bu sayfa patlar buga girer.
  const dispatch = useDispatch();
  const {movieDetailData, pendingDetail} = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
   
    return () => {
      // detayı görülen filmden geri çıkıldığında görüntülenen veriyi silmek için !!!
      dispatch(removeDetailData());
      // film detay sayfasındayken filmi favorilere eklersem, bu ekranda ayrıldığımda favorilere istek atsın benim oradaki favori filmlerimi güncellesin
      dispatch(fetchFavoriteMovie())
    };
  }, []);

  return (
    <View style={styles.container}>
      {pendingDetail && !movieDetailData ? (
        <Spinner />
      ) : (
        <ScrollView style={{position: 'relative'}} showsVerticalScrollIndicator={false}>
          <FastImage
            style={{width: width, height: height * 0.7, backgroundColor: 'red'}}
            source={{
              uri: `${IMAGE_BASE_URL}` + `${movieDetailData?.poster_path}`,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web,
              // web: Sunucu tarafında sık sık güncellenen görüntüler için uygundur. / cacheOnly: Yalnızca önbellekten görüntüleri gösterir, herhangi bir ağ isteğinde bulunmaz.
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <LinearGradient
            colors={['transparent', 'rgba(74,4,4,0.8)', 'rgba(74,4,4,1)']}
            style={{
              width: width,
              height: height * 0.9,
              position: 'absolute',
              bottom: 0,
            }}
            // Geçişin başlangıç noktasını belirler. {x: 0.5, y: 0} ile ortada yatay olarak (x: 0.5), ve üstte dikey olarak (y: 0) başlar.
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
          <View style={{position: "relative", bottom: 150}}>
            <Text
                numberOfLines={1}
                style={{color: appColors.WHITE, fontSize: 24, textAlign: "center", fontWeight: '600', marginVertical: 10}}>
                {movieDetailData?.title}
            </Text>
            <Text
                style={{color: appColors.GRAY2, fontSize: 16, padding: 5, paddingHorizontal: 10,  textAlign: "center"}}>
                {movieDetailData?.overview}
            </Text>
            <Text
                style={{color: appColors.YELLOW, fontSize: 16, padding: 20, paddingHorizontal: 10,  textAlign: "center"}}>
                Popularity: {movieDetailData?.popularity}
            </Text>
            <Text
                style={{color: appColors.YELLOW, fontSize: 16, padding: 10, paddingHorizontal: 10,  textAlign: "center"}}>
                Release Date: {movieDetailData?.release_date}
            </Text>
            <View style={{flexDirection: "row", alignSelf: "center", alignItems: "center", padding: 10}}>
              <Text
                  style={{color: appColors.YELLOW, fontSize: 16, padding: 10, paddingHorizontal: 10,  textAlign: "center"}}>
                    Add to Favorite
              </Text>
              {/* dökümanda bu bunları yollayarak favorilere ekleme yapabildiğimiz yazıyor */}
              <Pressable onPress={()=> 
              dispatch(addFavoriteMovie({media_type: 'movie', media_id: movieDetailData.id, favorite: true}))}>
                <Icon name="heart" size={28} color={appColors.GRAY2} />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A0404',
  },
});

export default MovieDetail;
