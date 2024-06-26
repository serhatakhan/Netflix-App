import React, {Component} from 'react';
import {FAVORITES, HOME} from '../../utils/routes';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = ({size, color, name, focused}) => {

  if (name === HOME) return <Icon name="home" size={size} color={color} />;
  else if (name === FAVORITES) return <Icon name="heart" size={size} color={color} />;
};

export default TabIcon;
