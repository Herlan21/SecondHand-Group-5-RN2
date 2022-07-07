import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { purple, black, purple1, white } from '../../constant'
import { InputText, DropdownInput } from '../../components'
import regions from '../../constant/regions'


const ChangeProfile = () => {
  return (

    <View style={{ flex: 1, backgroundColor: white }}>

      <View>
        <Text style={styles.lengkapiProfile}>Lengkapi Info Akun</Text>

        <View>
          <TouchableOpacity>
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
              />

              <Text style={styles.wrapperJudul}>Kota</Text>
              <DropdownInput 
                data={regions}
              />

              <Text style={styles.wrapperJudul}>Alamat</Text>
              <InputText
                name="Alamat"
                placeholder="Alamat"
                style={{ textAlignVertical: 'top', height: 100 }}
              />

              <Text style={styles.wrapperJudul}>No Handphone</Text>
              <InputText
                name="NoHandphone"
                placeholder="No Handphone"
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

  buttonSimpan: {
    backgroundColor: purple,
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 16,
  }
})