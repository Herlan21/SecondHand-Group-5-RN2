import React from "react";
import { Home, Notifikasi, Jual, DaftarJual, Akun, } from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import { purple } from "../constant";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-vector-icons/Ionicons";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: purple
        }} >

            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                TabBarIcon: ({ color }) => (
                    <Icon name="home-outline" size={24} color={color} />
                )
            }}
            />
            
            <Tab.Screen name="Notifikasi" component={Notifikasi} />
            <Tab.Screen name="Jual" component={Jual} />
            <Tab.Screen name="DaftarJual" component={DaftarJual} />
            <Tab.Screen name="Akun" component={Akun} />
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