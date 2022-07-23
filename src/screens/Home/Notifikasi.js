import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { purple, black, white } from '../../constant'
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { notificationData } from '../../redux/action/getNotification';

const Notifikasi = () => {

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const token = useSelector(state => state.AuthReducers.authToken);
  const notification = useSelector(state => state.NotificationReducer.notificationResults);

  console.log(notification)

  useEffect(() => {
    if (isFocused) {
      dispatch(notificationData(token)) //ngambil api dengan parameter token
      console.log(token);
    }
  }, [isFocused])

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={styles.akun}>Notifikasi</Text>
      </View>

      <ScrollView>
        {notification.map((data, index) => (
          
          <TouchableOpacity
            key={index?.id}>

            <View style={{ flexDirection: 'row', paddingTop: 24, justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }}>
              <View style={{ padding: 4, flexDirection: 'row' }}>
                <Image
                  style={{ width: 60, height: 60, borderRadius: 12 }}
                  source={{
                    uri: `${data.image_url}`,
                  }}
                />
                <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
                  <Text style={{ marginLeft: 4 }}>{data.product_name}</Text>
                  <Text style={{ marginLeft: 4 }}>Rp. {data.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Text>
                  <Text style={{ marginLeft: 4 }}>Seller : {data.seller_name}</Text>
                </View>
              </View>
              <View style={{ padding: 4 }}>
                <Text>{data.createdAt}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ padding: 6 }}></View>
    </View>
  )
}

export default Notifikasi

const styles = StyleSheet.create({
  akun: {
    fontWeight: 'bold',
    color: black,
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 20
  },
})