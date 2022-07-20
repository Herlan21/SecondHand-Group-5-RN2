import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = ({ route }) => {

    const {IdProduct} = route.params

    return (
        <View>
            <Text>{IdProduct}</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})