import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { shadow, white } from '../../constant'
import { FormatRupiah } from '../../constant/rupiah'

const Card = ({ onPress, category, price, imageUrl, name, basePrice }) => {

    return (
        <TouchableOpacity onPress={onPress}>

            <View style={styles.container}>
                <Text style={styles.card}>{name}</Text>
                <Text> {category?.map((item) => (category.length > 1 ? `${item.name}, ` : item.name))} </Text>
                <Text> {FormatRupiah(basePrice)} </Text>
            </View>

            <View>
                <Image
                    source={{uri: imageUrl}}
                    style={styles.image}
                />
            </View>

        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({


    card: {
        width: 150,
        height: 200,
        backgroundColor: white,
        marginVertical: 35,
        marginLeft: 30,
        ...shadow
    },

    image:{
        width: 105,
        height: 100,
    }
})