import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({ onChangeText, value, placeholder, error, secureTextEntry, style }) => {
    
    return (
        <View>
            <TextInput
                style={style}
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