import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { gray } from '../../constant'

const InputText = ({ onChangeText, value, name, secureTextEntry, placeholder, type, style }) => {
    return (
        <TextInput
            style={[styles.inputText, {...style}]}
            value={value}
            name={name}
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={type}
        />
    )
}

export default InputText

const styles = StyleSheet.create({

    inputText: {
        height: 40,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: gray,
       

    }
})