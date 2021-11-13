import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system'
import { useNavigation } from '@react-navigation/native'
import TakePicture from '../components/TakePicture';
import ShowPictureWInfo from '../components/ShowPictureWInfo';

const CameraPage = (props) => {
  const [imageUri, setImageUri] = useState(null);
  return (
    <View style={styles.container}>
      {imageUri ? (
      <ShowPictureWInfo imageUri={imageUri} setImageUri={setImageUri}>
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text}>Hello</Text>
      </ShowPictureWInfo>
      ) : (
      <TakePicture setImageUri={setImageUri}>
        <Text style={styles.text}>World</Text>
        <Text style={styles.text}>World</Text>
      </TakePicture>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
})
export default CameraPage