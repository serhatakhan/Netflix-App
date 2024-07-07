import React, {Component} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appColors} from '../../theme/colors';
import {width} from '../../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import LogoutIcon from 'react-native-vector-icons/SimpleLineIcons';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NOTIFICATION } from '../../utils/routes';
import { useSelector } from 'react-redux';

const Header = (props) => {
  // çentik dikkate alınarak kenar boşluklarının ayarlanması için. açıklama aşağıda
  const insets = useSafeAreaInsets();
  const name = props?.route?.name // basılan ekrana gittiğimde ekranın adını alabiliyorum. buna göre header'da bazı ikonları göstericem veya göstermeyeceğim.
  const navigation = useNavigation()
  const {count} = useSelector(state => state.notification)

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom - 10, // -10 biz azalttık
        paddingLeft: insets.left + 5, // +5'de biz ekledik
        paddingRight: insets.right + 5, // +5'de biz ekledik
        backgroundColor: appColors.PRIMARY,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, alignItems: "flex-start"}}>
        {name ? (
          <Pressable onPress={()=> navigation.goBack()}>
            <BackIcon name="chevron-back-outline" size={30} color={appColors.WHITE} />
          </Pressable>
        ):(
          <LogoutIcon name="logout" size={25} color={appColors.WHITE} />
        )}
      </View>

      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8, flex: 1}}>
        <Icon name="search" size={26} color={appColors.WHITE} />
        {!name && (
          <Pressable onPress={()=> navigation.navigate(NOTIFICATION)}>
            <Icon name="bell" size={26} color={appColors.WHITE} />
            <View style={{backgroundColor: "red", justifyContent: "center", alignItems: "center", padding: 1, borderRadius: 100, width: 18, height: 18, position: "absolute", right:-2, top:-6}}>
              <Text style={{color: appColors.WHITE, fontSize: 12}}>{count}</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;

/**
 * useSafeAreaInsets hook'u, insets nesnesini döndürür ve bu nesne şu dört 
özelliği içerir:

- top: Güvenli alanın üst kenar boşluğu.
- bottom: Güvenli alanın alt kenar boşluğu.
- left: Güvenli alanın sol kenar boşluğu.
- right: Güvenli alanın sağ kenar boşluğu.

 * Bu değerler, güvenli alanın her bir kenarında ne kadar boşluk bırakılması gerektiğini
belirtir. Örneğin, çentikli ekranlarda içeriğin çentik tarafından engellenmemesi için 
üstte daha fazla boşluk bırakılması gerekebilir. Kodunuzda bu insets değerlerini 
kullanarak, bileşenin kenar boşluklarını dinamik olarak ayarlayabilirsiniz.
**/
