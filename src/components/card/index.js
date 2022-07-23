import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { shadow, white } from '../../constant'
import { FormatRupiah } from '../../constant/rupiah'

const Card = ({ onPress, category, price, imageUrl, name, basePrice, style }) => {

    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress} style={styles.wrapperCard}>

                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />


                <View style={styles.container}>
                    <Text style={[styles.nameProduct]} ellipsizeMode="tail" numberOfLines={1}>{name}</Text>
                    <Text style={styles.categoryProduct} ellipsizeMode="tail" numberOfLines={1}> {category?.map((item) => (category.length > 1 ? `${item.name}, ` : item.name))} </Text>
                    <Text style={[styles.nameProduct]}> {FormatRupiah(basePrice)} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({

    wrapperCard: {
        maxWidth: 150,
        height: 200,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 4
    },
    image: {
        width: 125,
        height: 100,
        justifyContent: 'center',
        borderRadius: 4
    },
    nameProduct: {
        color: 'black',
        fontWeight: '400',
        fontSize: 14,
    },
    categoryProduct: {
        fontSize: 10,
        lineHeight: 14,
        fontWeight: '400',
        marginVertical: 2
    },
})