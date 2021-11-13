import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CameraPage from './screens/CameraPage';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: '#222'}}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            title: "Home",
            headerStyle: {backgroundColor: '#222'},
            headerTitleStyle: {color: '#fff'},
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Text style={styles.navButton}>Camera</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="Camera"
          component={CameraPage}
          options={({navigation}) => ({
            title: "Camera",
            headerStyle: {backgroundColor: '#222'},
            headerTitleStyle: {color: '#fff'},
            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.navButton}>Home</Text>
            </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
