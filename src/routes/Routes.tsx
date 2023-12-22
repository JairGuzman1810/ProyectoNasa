import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParams} from '../types';
import Home from '../views/Home';
import Detail from '../views/Detail';

const Stack = createStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: '#071A5D',
  },
  headerTitleStyle: {
    color: '#FFFFFF',
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Asi se pone la navegación tanto de Home hacia el detalle. */}
        {/*Para que funcione en ios ocupo hacer npx pod-install ios, no se puede hacer en Windows*/}
        {/*Igualmente tuve que instalar react-native-gesture-handler, si no falla*/}
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
