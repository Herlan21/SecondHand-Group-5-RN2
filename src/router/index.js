import React, { useEffect, useState } from "react";
import { Home, Notifikasi, Jual, DaftarJual, Akun, Login, Register, ChangeProfile, Detail } from "../screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { purple } from "../constant";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import { View, ActivityIndicator } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Init } from "../redux/action/actionAuth";
import store from "../redux/store/store";
import Setting from "../screens/Setting";


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
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={24} />)
                }}
            />

            <Tab.Screen name="Notifikasi" component={Notifikasi}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Icon name="bell" color={color} size={24} />)
                }}
            />

            <Tab.Screen name="Jual" component={Jual}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Icon name="plus" color={color} size={24} />)
                }}
            />
            <Tab.Screen name="DaftarJual" component={DaftarJual}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Icon name="list" color={color} size={24} />)
                }}
            />
            <Tab.Screen name="Akun" component={Akun}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (<Icon name="user" color={color} size={24} />)
                }}
            />
        </Tab.Navigator>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const MainStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Akun"
                component={Akun}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ChangeProfile"
                component={ChangeProfile}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

const RootNavigation = () => {
    const token = useSelector(state => state.AuthReducers.authToken);
    console.log(token);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const init = async () => {
        await dispatch(Init());
        setLoading(false);
    }

    useEffect(() => {
        init()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return token === null ? <AuthStack /> : <MainStack />;
};
const Router = () => {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>

    )
}

export default Router;