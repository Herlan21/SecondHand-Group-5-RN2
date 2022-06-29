import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { purple, black } from '../../constant'
import { AkunMenu } from '../../components'
import Icon from 'react-native-vector-icons/Feather'


const Akun = () => {

  
  return (
    <View style={{ flex: 1 }}>

      <Text style={styles.akun}>Akun Saya</Text>

      <AkunMenu />

    </View>
  )
}

export default Akun

const styles = StyleSheet.create({

  akun: {
    fontWeight: 'bold',
    color: black,
    fontSize: 20,
    top: 20,
    left: 20,
  },


})