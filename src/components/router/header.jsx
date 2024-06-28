import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appColors} from '../../theme/colors';
import {width} from '../../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import LogoutIcon from 'react-native-vector-icons/SimpleLineIcons';

const Header = () => {
  // çentik dikkate alınarak kenar boşluklarının ayarlanması için. açıklama aşağıda
  const insets = useSafeAreaInsets();

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
        <LogoutIcon name="logout" size={25} color={appColors.WHITE} />
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
        <Icon name="bell" size={26} color={appColors.WHITE} />
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
