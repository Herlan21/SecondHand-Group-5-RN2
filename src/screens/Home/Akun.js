import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { purple, black, white } from '../../constant';
import { AkunMenu } from '../../components';
import { profileData } from '../../redux/action/getProfileData'

const Akun = ({ navigation }) => {

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const token = useSelector(state => state.AuthReducers.authToken);

  const profileUser = useSelector((state) => state.ProfileReducer.profileUser);

  useEffect(() => {
    if (isFocused) {
      dispatch(profileData(token.authToken)) //ngambil api dengan parameter token
      console.log(token);
    }
  }, [isFocused])

  return (
    <View style={{ flex: 1 }}>


      <Text style={styles.akun}>Akun Saya</Text>

      <Text style={styles.nameUser}>{profileUser.full_name}</Text>

      <AkunMenu navigation={navigation} />

      <View>
      </View>


    </View>
  )
}

export default Akun

const styles = StyleSheet.create({

  akun: {
    fontWeight: 'bold',
    color: black,
    fontSize: 20,
    top: 20,
    left: 20,
  },

  nameUser: {
    color: black,
    textAlign: 'center',
    fontWeight: '600',
    top: 30
  },




})