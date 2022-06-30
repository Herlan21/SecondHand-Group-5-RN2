import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Logout } from '../../redux/action/actionAuth'
import { useDispatch, useSelector } from 'react-redux'


const Akun = () => {

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(Logout())
  }
  
  return (
    <View style={{ flex: 1 }}>
      <Text>Akun</Text>
      <TouchableOpacity
        onPress={() => logout()}
        style={{ alignSelf: 'center', backgroundColor: 'red', padding: 8, borderRadius: 8 }}>
        <View>
          <Text style={{ color: 'white' }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({})