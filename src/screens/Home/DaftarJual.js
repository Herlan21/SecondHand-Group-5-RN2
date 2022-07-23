import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { purple, black, white, purple1 } from '../../constant'
import { useSelector, useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { profileData } from '../../redux/action/getProfileData'
import { getSellerProduct } from '../../redux/action/getSellerProduct'
import Icon from 'react-native-vector-icons/Feather'

const DaftarJual = ({ navigation }) => {


  const dispatch = useDispatch();
  const isFocused = useIsFocused();


  const token = useSelector(state => state.AuthReducers.authToken);
  const profileUser = useSelector((state) => state.ProfileReducer.profileUser);
  const sellerProduct = useSelector((state) => state.SellerProductReducer.sellerProduct);
  const addData = () => navigation.navigate('AddProduct')

  useEffect(() => {
    if (isFocused) {
      dispatch(profileData(token)) //ngambil api dengan parameter token
      dispatch(getSellerProduct(token)) //ngambil api dengan parameter token
      // console.log(token);
      console.log(profileUser);
    }
  }, [isFocused])

  return (
    <View style={{ padding: 8 }}>
      <Text style={{
        fontWeight: 'bold',
        color: black,
        fontSize: 20, padding: 8
      }}>
        Daftar Jual Saya
      </Text>
      <View style={{ borderWidth: 1, borderRadius: 12 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ padding: 8 }}>
              <Image
                style={{ width: 40, height: 40, }}
                source={{
                  uri: `${profileUser.image_url == null ? 'https://reactnative.dev/img/tiny_logo.png' : profileUser.image_url}`,
                }}
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ padding: 4, fontWeight: 'bold' }}>
                {profileUser.full_name}
              </Text>
              <Text style={{ padding: 4 }}>
                {profileUser.city}
              </Text>
            </View>
          </View>
          <View style={{
            padding: 4, margin: 8, justifyContent: 'center', borderWidth: 1, borderRadius: 12, borderColor: purple
          }}>
            <TouchableOpacity style={{ color: black }}
              onPress={() => navigation.navigate('ChangeProfile')} >
              <Text style={{ padding: 4 }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true}>
          <View style={{
            display: 'flex', flexDirection: 'row', paddingTop: 12, justifyContent: 'space-around'
          }}>
            <View style={{ margin: 4, padding: 10, flexDirection: 'row', borderWidth: 1, borderColor: purple, borderRadius: 12, backgroundColor: purple1 }}>
              <View style={{ padding: 4 }}>
                <Icon name="box" size={20} color={purple} />
              </View>
              <View style={{ padding: 4 }}>
                <Text>
                  Produk
                </Text>
              </View>
            </View>
            <View style={{ margin: 4, padding: 10, flexDirection: 'row', borderWidth: 1, borderColor: purple, borderRadius: 12, backgroundColor: purple1 }}>
              <View style={{ padding: 4 }}>
                <Icon name="heart" size={20} color={purple} />
              </View>
              <View style={{ padding: 4 }}>
                <Text>
                  Diminati
                </Text>
              </View>
            </View>
            <View style={{ margin: 4, padding: 10, flexDirection: 'row', borderWidth: 1, borderColor: purple, borderRadius: 12, backgroundColor: purple1 }}>
              <View style={{ padding: 4 }}>
                <Icon name="dollar-sign" size={20} color={purple} />
              </View>
              <View style={{ padding: 4 }}>
                <Text>
                  Terjual
                </Text>
              </View>
            </View>
            <View style={{ margin: 4, padding: 10, flexDirection: 'row', borderWidth: 1, borderColor: purple, borderRadius: 12, backgroundColor: purple1 }}>
              <View style={{ padding: 4 }}>
                <Icon name="box" size={20} color={purple} />
              </View>
              <View style={{ padding: 4 }}>
                <Text>
                  Produk
                </Text>
              </View>
            </View>
            <View style={{ margin: 4, padding: 10, flexDirection: 'row', borderWidth: 1, borderColor: purple, borderRadius: 12, backgroundColor: purple1 }}>
              <View style={{ padding: 4 }}>
                <Icon name="box" size={20} color={purple} />
              </View>
              <View style={{ padding: 4 }}>
                <Text>
                  Produk
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <View style={{ padding: 12, flexDirection: 'row' }}>
            <View style={{
              borderStyle: 'dashed', borderWidth: 1, borderRadius: 10, justifyContent: 'center'
            }}>
              <TouchableOpacity style={{ padding: 26 }}
                onPress={addData} >
                <View style={{ alignItems: 'center' }}>
                  <Icon name="plus-circle" size={30} />
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>
                    Tambah Produk
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {sellerProduct.map((data, index) => (
            <TouchableOpacity
              onPress={addData}
              key={index}>
              <View style={{ padding: 12, flexDirection: 'row' }}>
                <View style={{
                  borderWidth: 1, borderRadius: 10,
                }}>
                  <View>
                    <Image
                      style={{ width: 120, height: 80, borderRadius: 12 }}
                      source={{
                        uri: `${data.image_url}`,
                      }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontWeight: 'bold', padding: 2 }}>
                      {data.name}
                    </Text>
                    <Text style={{ padding: 2 }}>
                      {data.location}
                    </Text>
                    <Text style={{ fontWeight: 'bold', padding: 2 }}>
                      Rp. {data.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}

        </View>
        <View style={{ padding: 100 }}></View>
      </ScrollView >
    </View >
  )
}

export default DaftarJual

const styles = StyleSheet.create({})