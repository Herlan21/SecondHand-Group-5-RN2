import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector, useDispatch } from 'react-redux';
import { purple, black, purple1, white } from '../../constant'
import { useIsFocused } from '@react-navigation/native';
import { InputText, DropdownInput, PhotoProfile } from '../../components'
import regions from '../../constant/regions'
import { profileData } from '../../redux/action/getProfileData'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useState } from 'react';


const ChangeProfile = ({ navigation }) => {

  const [data, setData] = useState();
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    }
  }

  const handleClick = async () => {
    axios.put('https://market-final-project.herokuapp.com/auth/user', { image_url: data })
      .then(response => console.log(response.data));
  };
  const openGallery = async () => {
    const images = await launchImageLibrary(options)
    // setData(images.assets['0'].uri)
    const formdata = new FormData()
    formdata.append('image', {
      uri: images.assets['0'].uri,
      type: images.assets['0'].type,
      name: images.assets['0'].fileName
    })
    let res = await fetch(
      'https://market-final-project.herokuapp.com/auth/user',
      {
        method: 'put',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
          'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydWxAbWFpbC5jb20iLCJpYXQiOjE2NTgzNzMxMDZ9.QvOBnU2fDcX43C__PwZz5ChDn8AO_WQkIRN-PvuCfQU'
        },
      }
    );
    let response = await res.json()
    console.log(response, "responseJson")
    // console.log(images.assets['0'].uri)
  }

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
            {profileUser.image_url == null ?
              <TouchableOpacity
                onPress={openGallery}
                style={styles.Logowrapper}>
                <Icon style={styles.logoCamera} name="camera" size={28} color={purple} />
              </TouchableOpacity>
              :
              <View style={styles.Logowrapper}>
                <Image
                  style={{ width: 120, height: 120 }}
                  source={{
                    uri: `${profileUser.image_url}`,
                  }}
                />
              </View>
            }

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
                <TouchableOpacity
                  onPress={handleClick}
                  style={styles.buttonSimpan}>
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