import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { NativeBaseProvider, Text, Box, Heading, Center,NBBox, Button } from 'native-base';
import { connect, Provider } from 'react-redux'
import { setOrganization } from '../redux/actions/organization'
import { setImageUri } from '../redux/actions/imageUri'
import { setSpecies } from '../redux/actions/species'


const Analysis = (props) => {
  


  return (
    <View>
      <Text>Analysis</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
  },
  row: {
    display:'flex',
    flexDirection:'row'
  },
})

const mapStateToProps = (state) => ({
  organization: state.organization,
  imageUri: state.imageUri,
  species: state.species,
})
const mapDispatchToProps = (dispatch) => ({
  setOrganization: (organization) => dispatch(setOrganization(organization)),
  setImageUri: (imageUri) => dispatch(setImageUri(imageUri)),
  setSpecies: (species) => dispatch(setSpecies(species)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CameraPage)