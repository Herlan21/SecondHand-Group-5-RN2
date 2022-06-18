import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CodePush from 'react-native-code-push'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/Home'
import Notifikasi from './src/Notifikasi'
import DaftarJual from './src/DaftarJual'
import Akun from './src/Akun'
import Jual from './src/Jual'

import FeatherIcon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
         tabBarIcon : ({color}) => {
          if (route.name === 'Home'){
            return <FeatherIcon name="home" size={26} color={color}/> 
          }else if (route.name == 'Notifikasi'){
            return <Ionicons name="notifications-outline" size={26} color={color}/>
          }else if (route.name == 'Jual'){
            return <Ionicons name="add-circle-outline" size={26} color={color}/>
          }else if (route.name == 'Daftar Jual'){
            return <FeatherIcon name="list" size={26} color={color}/>  
          }else if (route.name == 'Akun'){
            return <Octicons name="person" size={26} color={color}/>
          }
         },
         tabBarActiveTintColor : '#7126B5',
         tabBarInactiveTintColor : 'grey'
        })}
      >
        <Tab.Screen name='Home' component={Home} options={{headerShown : false}}/>
        <Tab.Screen name='Notifikasi' component={Notifikasi} options={{headerShown : false}}/>
        <Tab.Screen name='Jual' component={Jual} options={{headerShown : false}}/>
        <Tab.Screen name='Daftar Jual' component={DaftarJual} options={{headerShown : false}}/>
        <Tab.Screen name='Akun' component={Akun} options={{headerShown : false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default CodePush(codePushOptions)(App)
// export default App

const styles = StyleSheet.create({})