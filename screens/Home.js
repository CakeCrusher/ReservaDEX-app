import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

const Home = (props) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);
  if (!location) {
    return <Text style={styles.text}>Loading...</Text>;
  }
  return (
    <View>
      <MapView 
        style={styles.map}
        // showsUserLocation={true}
      >
        <Marker coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}>
          <View style={styles.marker}>
            <Image style={styles.pinImage} source={{uri: "https://knighthacks2021.blob.core.windows.net/images/c2a78c27-f44e-42e1-b448-f67180eee2ed/637724322917786732.jpg?sv=2018-03-28&sr=b&sig=XPanD2x7EcrpBt5Th3jaFCLq6ewPzZCnnn1Plzx5lZk%3D&se=2021-11-13T20%3A46%3A31Z&sp=r"}} />
          </View>
        </Marker>
      </MapView>
      <Text style={styles.text}>{location.coords.latitude}</Text>
      <Text style={styles.text}>{location.coords.longitude}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
  },
  map: {
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  pinImage: {
    width: 50,
    height: 50,
  }
})
export default Home