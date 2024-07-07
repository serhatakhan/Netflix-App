import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {StatusBar, Text} from 'react-native';
import {appColors} from './src/theme/colors';

const App = () => {
  // * böyle yapmamızın sebebi, splash screen kapanmadan o sırada bazı verileri sunucudan çekmek isteyebiliriz veya o sırada başka işlemler yapmak isteyebiliriz. bundan dolayı splash screen bizim kontrolümüzde olsun, biz istediğimiz zaman kapansın istiyoruz.
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const linking = {
    prefixes: [
      'netflixclone://',
      'https://www.netflixClone.com',
      'http://www.netflixClone.com',
    ],
    config: {
      screens: {
        Netflix: '',
        MovieDetail: 'details/:movieId',
      },
    },
  };
  /** linking --> linking, uygulamanın belirli URL şemalarını tanıyıp uygun ekranları açmasını sağlar:

   * prefixes dizisi, uygulamanın tanıyacağı URL şemalarını içerir. Burada netflixclone:// şeması tanımlanmış. Bu, uygulamanın netflixclone:// ile başlayan URL'leri tanıyacağı anlamına gelir.
   * config objesi, screens adında bir alt objeye sahip. Bu alt obje, uygulamanızdaki ekran isimlerini (route name) ve bu ekranların hangi URL yollarıyla eşleşeceğini belirtir.
   * netflixclone:// şemasını açtığınızda Netflix adlı ekranın açılacağını belirtir. Netflix ekranına herhangi bir özel yol (path) belirtilmemiş. Bu nedenle sadece netflixclone:// URL'si kullanıldığında Netflix ekranı açılacaktır.
   * details/:movieId kısmı, URL yolunun details/ ile başlayacağını ve ardından bir movieId parametresi alacağını gösterir.
   */

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <StatusBar backgroundColor={appColors.PRIMARY} />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
