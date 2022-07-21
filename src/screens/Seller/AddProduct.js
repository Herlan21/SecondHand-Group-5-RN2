import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useSelector, useDispatch } from 'react-redux';
import { purple, black, purple1, white } from '../../constant'
import { useIsFocused } from '@react-navigation/native';
import { InputText, DropdownInput, PhotoProfile } from '../../components'
import regions from '../../constant/regions'
import { profileData } from '../../redux/action/getProfileData'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { changeProfile } from '../../redux/action/putChangeProfile';
import { postProduct } from '../../redux/action/pushDataProduct';

const AddProduct = ({ navigation }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [base_price, setBase_price] = useState('');
    const [location, setLocation] = useState('');
    const [Photo, setPhoto] = useState([]);
    const [category_ids, setcategory_ids] = useState(1);

    // console.log(Photo)
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

    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const token = useSelector(state => state.AuthReducers.authToken);
    const profileUser = useSelector((state) => state.ProfileReducer.profileUser);
    // console.log(profileUser)

    const openGallery = async () => {
        const images = await launchImageLibrary(options)
        const formdata = new FormData()
        formdata.append('name', name)
        formdata.append('description', description)
        formdata.append('base_price', base_price)
        formdata.append('category_ids', category_ids)
        formdata.append('location', location)
        formdata.append('image', {
            uri: images.assets['0'].uri,
            type: images.assets['0'].type,
            name: images.assets['0'].fileName
        })
        // await setPhoto(formdata)
        console.log(formdata)
        const config = { headers: { 'Content-Type': 'multipart/form-data', 'access_token': token } }

        let res = await axios.post('https://market-final-project.herokuapp.com/seller/product', formdata, config)
            .then(response => console.log(response.data),
                navigation.navigate('MainApp', { screen: 'DaftarJual' }),
                alert('Sukses')
            ).catch(function (error) {
                if (error.response) {
                    alert(error.message)
                }
            })
    }

    // const handleClick = () => {
    // dispatch(changeProfile(token,
    //     Name, Description, Base_price, Location))
    // };

    const handleClick = async () => {
        const formdata = new FormData()
        formdata.append('name', name)
        formdata.append('description', description)
        formdata.append('base_price', base_price)
        formdata.append('category_ids', category_ids)
        formdata.append('location', location)
        formdata.append('image', {
            uri: Photo.assets['0'].uri,
            type: Photo.assets['0'].type,
            name: Photo.assets['0'].fileName
        })
        // await dispatch(postProduct(token, name, description, base_price, location, category_ids, Photo, navigation));
    };

    useEffect(() => {
        if (isFocused) {
            dispatch(profileData(token))
            console.log(token);
        }
    }, [isFocused])

    return (<View style={{ flex: 1, backgroundColor: white }}>

        <View>
            <Text style={styles.lengkapiProfile}>Lengkapi Detail Produk</Text>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                    <Icon style={styles.logoBack} name="arrow-left" size={28} color={black} />
                </TouchableOpacity>

                <View>

                    <View>
                        <Text style={styles.wrapperJudul}>Nama</Text>
                        <InputText
                            name="Nama"
                            placeholder="Nama"
                            onChangeText={(text) => setName(text)}
                        // value={Name == '' ? profileUser.Name : Name}
                        />

                        <Text style={styles.wrapperJudul}>Deskripsi</Text>
                        <InputText
                            name="Deskripsi"
                            placeholder="Deskripsi"
                            onChangeText={(text) => setDescription(text)}
                        // value={city == '' ? profileUser.city : city}
                        />

                        <Text style={styles.wrapperJudul}>Harga</Text>
                        <InputText
                            name="Harga"
                            placeholder="Harga"
                            style={{ textAlignVertical: 'top', height: 100 }}
                            onChangeText={(text) => setBase_price(text)}
                        // value={address == '' ? profileUser.address : address}
                        />

                        <Text style={styles.wrapperJudul}>Lokasi</Text>
                        <InputText
                            name="Lokasi"
                            placeholder="Lokasi"
                            onChangeText={(text) => setLocation(text)}
                        // value={phone_number == '' ? profileUser.phone_number : phone_number}
                        />

                        {/* <View>
                            <TouchableOpacity
                                onPress={handleClick}
                                style={styles.buttonSimpan}>
                                <Text style={styles.simpan}>Simpan</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>

                    <TouchableOpacity
                        onPress={openGallery}
                        style={styles.Logowrapper}>
                        <Icon style={styles.logoCamera} name="plus-circle" size={28} color={purple} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </View>
    )
}

export default AddProduct

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