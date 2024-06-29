import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIEDETAIL, MOVIELIST, NETFLIX} from '../utils/routes';
import TabNavigator from './TabNavigator';
import MovieList from '../screens/movieList';
import Header from '../components/router/header';
import MovieDetail from '../screens/movieList/movieDetail';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation()
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
      <Stack.Screen
        name={MOVIEDETAIL}
        component={MovieDetail}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable style={{backgroundColor: appColors.YELLOW, padding:5, borderRadius:100}} onPress={()=> navigation.goBack()}>
              <Icon name="return-up-back" size={30} color={appColors.WHITE} />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
