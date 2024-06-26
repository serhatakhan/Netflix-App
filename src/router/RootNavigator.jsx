import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIELIST, NETFLIX} from '../utils/routes';
import TabNavigator from './TabNavigator';
import MovieList from '../screens/movieList';
import Header from '../components/router/header';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NETFLIX} component={TabNavigator} />
      <Stack.Screen
        name={MOVIELIST}
        component={MovieList}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
