import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login } from '../../redux/action'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const submit = () => {
        dispatch(Login(email, password))
    };
    return (
        <View>
            <TextInput
                style={{ margin: 12, padding: 10, borderWidth: 1 }}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={{ margin: 12, padding: 10, borderWidth: 1 }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={{ margin: 12 }}>
                <Button onPress={submit} title="Login" />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ alignItems: 'center' }}>Don't have an account ?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register');
                    }}>
                    <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 16 }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen