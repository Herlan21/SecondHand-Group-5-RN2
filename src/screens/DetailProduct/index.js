import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { productDetail } from '../../redux/action/getProductData';
import { bidProduk, GetBidProduct } from '../../redux/action/getBidProduct';

const Detail = ({ route }) => {
    const dispatch = useDispatch()
    const { IdProduct } = route.params

    const token = useSelector(state => state.AuthReducers.authToken);
    const dataDetail = useSelector((state) => state.DetailReducer.detailProduct);
    const allBid = useSelector((state) => state.ReducersBid.allBid.filter((item) => item.product_id === IdProduct));

    const [bid, setBid] = useState(0);

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
        <View>
            <Text>{dataDetail.name}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setBid}
                value={bid}
                placeholder="Kirim harga tawarmu"
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => BidProduk()} disabled={allBid[0]?.status}>
                <Text>Bid Produk</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})