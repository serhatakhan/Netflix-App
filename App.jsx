import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  
  // * böyle yapmamızın sebebi, splash screen kapanmadan o sırada bazı verileri sunucudan çekmek isteyebiliriz veya o sırada başka işlemler yapmak isteyebiliriz.
  // bundan dolayı splash screen bizim kontrolümüzde olsun, biz istediğimiz zaman kapansın istiyoruz.
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
