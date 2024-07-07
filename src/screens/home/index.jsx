import React, {useEffect} from 'react';
import {View, FlatList, Platform, PermissionsAndroid} from 'react-native';
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
import messaging from '@react-native-firebase/messaging';
import { increment, setNotification } from '../../store/slice/notificationSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
  }, []);

  // kullanıcıya bildirim göndermek için izinleri iste !! kullanıcının izin vermesini bekleyeceğiz
  const requestPermission = async () => {
    if(Platform.OS == "android"){
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    } else {
      const authStatus = await messaging().requestPermission(); // Kullanıcıdan bildirim izni istemek için çağrılır, authStatus: Kullanıcının izni durumunu alır.
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL; // enabled: İzin durumunun AUTHORIZED veya PROVISIONAL olup olmadığını kontrol eder. Bu, kullanıcının bildirimlere izin verip vermediğini belirtir.
    }
  };

  // ÖNEMLİ NOT:
  // IOS cihazlarda push notification’ı kullanabilmek/geliştirebilmek için bir 'DEVELOPER HESABINA' sahip olmanız gerekiyor. Firebase üzerinden gönderdiğimiz bildirim mesajlarının IOS cihazlara ulaşabilmesi için Apple Push Notification service’i (APNs) aktif etmemiz ve Firebase’in bu servisi kullanabilmesi için gerekli bazı ayarlamaları yapmamız lazım.

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token', token);
  };

  useEffect(() => {
    getToken();
    requestPermission(); // Kullanıcıdan bildirim izni iste
    const unsubscribe = messaging().onMessage(async remoteMessaging => {  // messaging().onMessage: Uygulama ön planda iken gelen mesajları dinler
      dispatch(increment()) // bildirim geldiğinde badge'deki sayıyı 1 arttıran actionu çalıştır.
      dispatch(setNotification(remoteMessaging))
    });
    return unsubscribe; // Bileşen unmount edildiğinde onMessage dinleyicisini temizler
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
