import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Favorites from '../screens/favorites';
import {FAVORITES, HOME} from '../utils/routes';
import {appColors} from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import Header from '../components/router/header';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: appColors.PRIMARY,
        },
        tabBarActiveTintColor: appColors.WHITE,
        tabBarInactiveTintColor: appColors.GRAY,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            route={route}
            name={route?.name}
          />
        ),
        header: () => (
          <Header />
        )
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
    </Tab.Navigator>
  );
}
