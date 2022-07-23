import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { productDetail } from '../../redux/action/getProductData';
import { bidProduk, GetBidProduct } from '../../redux/action/getBidProduct';
import { black, white, purple1, purple, shadow, gray } from '../../constant/index';
import { FormatRupiah } from '../../constant/rupiah'

const Detail = ({ route }) => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

    const { IdProduct } = route.params

    const token = useSelector(state => state.AuthReducers.authToken);
    const dataDetail = useSelector((state) => state.DetailReducer.detailProduct);
    const allBid = useSelector((state) => state.ReducersBid.allBid.filter((item) => item.product_id === IdProduct));

    const [bid, setBid] = useState('');

    useEffect(() => {
        dispatch(productDetail(IdProduct));
        dispatch(GetBidProduct(token))
        console.log(allBid);
    }, [dispatch])


    const BidProduk = () => {
        const data = {
            product_id: IdProduct,
            bidPrice: bid
        }
        dispatch(bidProduk(data, token))
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: white }}>


                <Image
                    source={{ uri: dataDetail.image_url }}
                    style={styles.imageDetail}
                    resizeMode="contain"
                />


                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.wrapperBackButton}>
                    <Icon name="arrow-left" size={30} color="black" style={styles.backButton} />
                </TouchableOpacity>



                <View style={styles.wrapperDetailName}>
                    <Text style={styles.detailName}>{dataDetail.name}</Text>

                    <Text>
                        {dataDetail?.Categories?.map((item, index) => (
                            <Text key={item.id}>
                                {index > 0 ? ', ' : ''}
                                {item.name}
                            </Text>
                        ))}
                    </Text>

                    <Text style={styles.detailName}>{FormatRupiah(dataDetail.base_price)}</Text>
                </View>

                <View style={styles.wrapperDetailName}>
                    <Text style={styles.detailName}>Deskripsi Produk</Text>
                    <Text style={styles.desckripsiProduk}>{dataDetail.description}</Text>
                </View>

                <View style={styles.wrapperBidInput}>
                    <TextInput
                        style={styles.inputBid}
                        onChangeText={setBid}
                        value={bid}
                        placeholder="Kirim harga tawarmu"
                        keyboardType="numeric"
                    />
                </View>

                <View style={[styles.wrapperButtonBid, { backgroundColor: allBid[0]?.status ? gray : purple, }]}>
                    <TouchableOpacity style={styles.ButtonBid} onPress={() => BidProduk()} disabled={allBid[0]?.status}>
                        <Text style={styles.buttonBidText}> {allBid[0]?.status ? 'Menunggu respon penjual' : 'Bid Produk'} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    imageDetail: {
        width: '100%',
        height: 300,
    },

    wrapperBackButton: {
        backgroundColor: purple1,
        width: 30,
        marginHorizontal: 15,
        borderRadius: 100,
    },

    wrapperDetailName: {
        marginTop: 18,
        paddingHorizontal: 10,
        marginHorizontal: 18,
        borderRadius: 10,
        backgroundColor: white,
        elevation: 4,
        paddingBottom: 10,
    },

    detailName: {
        color: black,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 6,
    },

    wrapperButtonBid: {
        paddingHorizontal: 10,
        marginHorizontal: 18,
        borderRadius: 10,
        paddingVertical: 8,
        marginVertical: 60,
    },

    buttonBidText: {
        color: white,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 15,
    },

    desckripsiProduk: {
        fontSize: 15,
    },

    inputBid: {
      fontSize: 16,
    },
    
    wrapperBidInput: {
       
        alignItems: 'center',
        borderColor: black
    }

})