import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { purple, black, purple1, white } from '../../constant'
import { Logout } from '../../redux/action/actionAuth'
import { useSelector, useDispatch } from 'react-redux'

const AkunMenu = ({ navigation }) => {


  const profileUser = useSelector((state) => state.ProfileReducer.profileUser);
  const dispatch = useDispatch()
  // const navigation = useNavigation();

  const logout = () => {
    dispatch(Logout())
  }
  return (

    <View style={styles.container}>

      {profileUser.image_url == null ?
        <TouchableOpacity
          style={styles.Logowrapper}>
          <Icon style={styles.logoCamera} name="camera" size={28} color={purple} />
        </TouchableOpacity>
        :
        <View style={styles.Logowrapper}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 12 }}
            source={{
              uri: `${profileUser.image_url}`,
            }}
          />
        </View>
      }

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <TouchableOpacity style={styles.akunSettingWrapper} onPress={() => navigation.navigate('ChangeProfile')} >
          <Icon style={styles.akunSetting} name="edit-2" size={28} color={purple} />
          <Text style={styles.akunSettingText}>Ubah Akun</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.akunSettingWrapper} onPress={() => navigation.navigate('Setting')}>
          <Icon style={styles.akunSetting} name="settings" size={28} color={purple} />
          <Text style={styles.akunSettingText}>Pengaturan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.akunSettingWrapper} onPress={() => logout()}>
          <Icon style={styles.akunSetting} name="log-out" size={28} color={purple} />
          <Text style={styles.akunSettingText}>Keluar</Text>
        </TouchableOpacity>

      </View>
    </View>

  )
}

export default AkunMenu

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  akunSettingWrapper: {
    flexDirection: 'row',
    marginTop: 20
  },

  Logowrapper: {
    alignItems: 'center',
    marginTop: 40,
  },

  logoCamera: {
    backgroundColor: purple1,
    padding: 35,
    borderRadius: 10
  },

  akunSetting: {
    // margin: 25,

  },

  akunSettingText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    // margin: 10,
    // top: 40,
  }
})