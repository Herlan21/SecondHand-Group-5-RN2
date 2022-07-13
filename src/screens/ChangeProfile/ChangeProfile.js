import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector, useDispatch } from 'react-redux';
import { purple, black, purple1, white } from '../../constant'
import { useIsFocused } from '@react-navigation/native';
import { InputText, DropdownInput } from '../../components'
import regions from '../../constant/regions'
import { profileData } from '../../redux/action/getProfileData'


const ChangeProfile = ({ navigation }) => {

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const token = useSelector(state => state.AuthReducers.authToken);
  const profileUser = useSelector((state) => state.ProfileReducer.profileUser);

  useEffect(() => {
    if (isFocused) {
      dispatch(profileData(token))
      console.log(token);
    }
  }, [isFocused])

  return (

    <View style={{ flex: 1, backgroundColor: white }}>

      <View>
        <Text style={styles.lengkapiProfile}>Lengkapi Info Akun</Text>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
            <Icon style={styles.logoBack} name="arrow-left" size={28} color={black} />
          </TouchableOpacity>

          <View>
            <TouchableOpacity style={styles.Logowrapper}>
              <Icon style={styles.logoCamera} name="camera" size={28} color={purple} />
            </TouchableOpacity>

            <View>
              <Text style={styles.wrapperJudul}>Nama</Text>
              <InputText
                name="Nama"
                placeholder="Nama"
                value={profileUser.full_name}
              />

              <Text style={styles.wrapperJudul}>Kota</Text>
              <View style={styles.drop}>
                <DropdownInput
                  data={regions}
                  value={profileUser.city}
                />
              </View>

              <Text style={styles.wrapperJudul}>Alamat</Text>
              <InputText
                name="Alamat"
                placeholder="Alamat"
                value={profileUser.address}
                style={{ textAlignVertical: 'top', height: 100 }}
              />

              <Text style={styles.wrapperJudul}>No Handphone</Text>
              <InputText
                name="NoHandphone"
                placeholder="No Handphone"
                value={profileUser.phone_number}
              />

              <View>
                <TouchableOpacity style={styles.buttonSimpan}>
                  <Text style={styles.simpan}>Simpan</Text>
                </TouchableOpacity>

              </View>
            </View>


          </View>

        </View>
      </View>
    </View>
  )
}

export default ChangeProfile

const styles = StyleSheet.create({

  lengkapiProfile: {
    color: black,
    fontWeight: '600',
    textAlign: 'center',
    top: 23,
  },

  logoBack: {
    marginLeft: 15,
  },

  Logowrapper: {
    alignItems: 'center',
    marginTop: 30,
  },

  logoCamera: {
    backgroundColor: purple1,
    padding: 35,
    borderRadius: 16
  },

  wrapperJudul: {
    fontSize: 14,
    marginBottom: 8,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 15,
  },

  simpan: {
    color: white,
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 10,

  },

  drop: {
    margin: 16
  },

  buttonSimpan: {
    backgroundColor: purple,
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 16,
  }
})