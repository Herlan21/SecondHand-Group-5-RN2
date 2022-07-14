import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { purple, black, purple1, white } from '../../constant'
import { useSelector, useDispatch } from 'react-redux';
// import { RegisterAction } from '../../redux/action/actionAuth'
import { changePassword } from '../../redux/action/changePassword'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from '../Auth/Input'

const Setting = ({ navigation }) => {

    const auth_Token = useSelector(state => state.AuthReducers.authToken);
    console.log(auth_Token)
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(changePassword(auth_Token, values.current_password, values.new_password, values.confirm_password, navigation))
        // navigation.navigate('Login')
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const changePasswordValidationSchema = yup.object().shape({
        current_password: yup
            .string()
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        new_password: yup
            .string()
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('new_password'), null], 'Passwords must match')
    })

    return (
        <View style={{ flex: 1, backgroundColor: white }}>

            <View>
                <Text style={styles.lengkapiProfile}>Pengaturan Ganti Kata Sandi</Text>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                        <Icon style={styles.logoBack} name="arrow-left" size={28} color={black} />
                    </TouchableOpacity>


                    <Formik
                        validationSchema={changePasswordValidationSchema}
                        initialValues={{ current_password: '', new_password: '', confirm_password: '' }}
                        onSubmit={handleSubmit}
                    >
                        {
                            ({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                                <View>
                                    <Input
                                        placeholder={'Current Password'}
                                        onChangeText={handleChange('current_password')}
                                        secureTextEntry={true}
                                        error={errors.current_password}
                                        value={values.current_password}
                                    />
                                    <Input
                                        placeholder={'New Password'}
                                        onChangeText={handleChange('new_password')}
                                        secureTextEntry={true}
                                        error={errors.new_password}
                                        value={values.new_password}
                                    />
                                    <Input
                                        placeholder={'Confirm Password'}
                                        onChangeText={handleChange('confirm_password')}
                                        secureTextEntry={true}
                                        error={errors.confirm_password}
                                        value={values.confirm_password}
                                    />
                                    <View style={{ padding: 8 }}>
                                        <Button onPress={handleSubmit} title="Change Password" />
                                    </View>
                                </View>
                            )
                        }
                    </Formik>

                </View>
            </View>
        </View>
    )
}

export default Setting

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