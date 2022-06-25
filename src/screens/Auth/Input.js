import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({ onChangeText, value, placeholder, error, secureTextEntry }) => {
    // const win = Dimensions.width
    return (
        <View>
            <TextInput
                style={{ margin: 12, padding: 10, borderWidth: 1 }}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
            <Text style={{ color: 'red' }}>{error}</Text>
        </View>
    )
}


export default Input