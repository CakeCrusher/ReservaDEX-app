import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, ScrollView, Image, Flex } from 'react-native'
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const TakePicture = ({setImageUri, children}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [])

  const sendPhoto = async (uri, width, height) => {
    const picture = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
    console.log('PICTUREE',picture);
    const payload = {
      userId: 'GARBAGE',
      file: picture,
    }
    const res = await fetch('http://reservadex-api.azurewebsites.net/file/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
    axios.post(`http://reservadex-api.azurewebsites.net/file/upload`, payload)
        .then((res) => {
                console.log('res:', res.data)
            }).catch(err => {
                console.log('err:', err)
            })
    // console.log('res: ', res);

    // write a payload json to a json file'

    // SEND TO BACKEND HERE
    // const analyzePicture = await fetch('https://api.com/analyze_picture', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     height: Int,
    //     width: Int,
    //     picture: String,
    //   }),
    // });
    // WILL PROCESS AS FOLLOWS
    // prediction of animal as label and square signaling location
    // navigation.navigate('Analysis')}
    setImageUri(uri);
  }
  const snap = async () => {
    let photo = await ref.current.takePictureAsync();
    console.log(photo);
    const uri = photo.uri;
    await sendPhoto(uri);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
          <Camera
            style={styles.camera} type={type}
            ref={ref}
          >
            <View style={styles.overlayContainer}>
              <TouchableOpacity
              style={{...styles.button, ...styles.flip}}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.button, ...styles.snap}}
                onPress={snap}>
                <Text style={styles.text}> Snap </Text>
              </TouchableOpacity>
              {children}
            </View>
        </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  overlayContainer: {
    position: 'relative',
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
  },
  button: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'red',
    opacity: 0.8,
    borderRadius: 10,
  },
  snap: {
    left: '50%',
  },
  flip: {
    right: 0,
  }
})
export default TakePicture