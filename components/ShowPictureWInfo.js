import React, { useState, useEffect, Children } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, ScrollView, Image } from 'react-native'



const ShowPictureWInfo = ({imageUri,setImageUri,children}) => {
  


  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <TouchableOpacity style={{...styles.button, ...styles.retake}} onPress={() => setImageUri(null)}>
        <Text style={styles.text}>Retake</Text>
      </TouchableOpacity>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  childrenContainer: {
    position: 'absolute',
    top: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  retake: {
    right: 0, 
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
export default ShowPictureWInfo