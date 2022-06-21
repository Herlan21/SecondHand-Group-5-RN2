import React from "react";
import { Home, Notifikasi, Jual, DaftarJual, Akun, } from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { purple } from "../constant";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: purple
        }} >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false,
                           tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={24} />)}}
            />

            <Tab.Screen name="Notifikasi" component={Notifikasi} 
                        options={{ headerShown: false,
                                   tabBarIcon: ({ color }) => (<Icon name="bell" color={color} size={24} />)}}
            />

            <Tab.Screen name="Jual" component={Jual} 
                        options={{ headerShown: false,
                                   tabBarIcon: ({ color }) => (<Icon name="plus" color={color} size={24} />)}}
            />
            <Tab.Screen name="DaftarJual" component={DaftarJual} 
                        options={{ headerShown: false,
                                   tabBarIcon: ({ color }) => (<Icon name="list" color={color} size={24} />)}}
            />
            <Tab.Screen name="Akun" component={Akun} 
                        options={{ headerShown: false,
                                   tabBarIcon: ({ color }) => (<Icon name="user" color={color} size={24} />)}}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> */}
        </Stack.Navigator>



    )
}

export default Router;