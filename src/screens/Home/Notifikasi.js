import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { purple, black, white } from '../../constant'

const Notifikasi = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.akun}>Notifikasi</Text>
    </View>
  )
}

export default Notifikasi

const styles = StyleSheet.create({
  akun: {
    fontWeight: 'bold',
    color: black,
    fontSize: 20,
    top: 20,
    left: 20,
  },
})