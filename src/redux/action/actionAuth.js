import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { API_LOGIN, API_REGISTER } from "../../config";

export const Init = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('token');
        if (token !== null) {
            console.log('token fetched');
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
        }
    }
}

export const Login = (email, password) => {
    return dispatch => {
        let token = null;
        axios.post(API_LOGIN, {

            email,
            password,
        }).then(res => {
            let data = res.data
            // let userInfo = res.data.user
            let ApiToken = data.access_token
            console.log(data.access_token)
            AsyncStorage.setItem('token', ApiToken);
            dispatch({
                type: 'LOGIN',
                payload: {
                    'authToken': ApiToken
                },
            })
        }).catch(function (error) {
            if (error.response) {
                alert(error.message)
            }
        })
    }
}


export const RegisterAction = (full_name, email, password, phone_number, address, city, navigation) => {
    return dispatch => {
        let token = null;
        axios.post(API_REGISTER, {
            email,
            password, full_name, phone_number, address, city
        }).then(res => {
            console.log(res)
            alert('success', 'Berhasil melakukan registrasi')
            navigation.navigate('Login')
        }).catch(function (error) {
            if (error.response) {
                alert(error.message)
            }
        })
    }
}

export const Logout = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        dispatch({
            type: 'LOGOUT'
        })
    }
}
