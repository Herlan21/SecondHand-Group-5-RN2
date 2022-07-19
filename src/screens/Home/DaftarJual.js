import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { purple, black, white, purple1 } from '../../constant'
import { useSelector, useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { profileData } from '../../redux/action/getProfileData'
import Icon from 'react-native-vector-icons/Feather'

const DaftarJual = () => {


  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const token = useSelector(state => state.AuthReducers.authToken);
  const profileUser = useSelector((state) => state.ProfileReducer.profileUser);
  const addData = () => console.log('test')

  useEffect(() => {
    if (isFocused) {
      dispatch(profileData(token)) //ngambil api dengan parameter token
      console.log(token);
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
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 40, height: 40, }}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ padding: 4 }}>
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
            <TouchableOpacity style={{ color: black }}>
              <Text style={{ padding: 4 }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
      <View style={{ paddingLeft: 4, paddingTop: 12, flexDirection: 'row' }}>
        <View style={{
          borderStyle: 'dashed', borderWidth: 1, borderRadius: 10,
        }}>
          <TouchableOpacity style={{ padding: 40 }}
            onPress={addData}
          >
            <Text>
              Test
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default DaftarJual

const styles = StyleSheet.create({})