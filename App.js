import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CameraPage from './screens/CameraPage';
import Home from './screens/Home';
import {store} from './redux/store';
import { connect, Provider } from 'react-redux'
import { NativeBaseProvider, Text, Box, extendTheme } from 'native-base';

const Stack = createNativeStackNavigator();

const newColorTheme = {
  brand: {
    900: '#212529',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <Provider store={store} >
      <NativeBaseProvider theme={theme}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Camera"
              component={CameraPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
});
