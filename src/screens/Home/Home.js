import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

  const token = useSelector(state => state.AuthReducers.authToken);
  console.log(token);
  console.log(token.authToken);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})