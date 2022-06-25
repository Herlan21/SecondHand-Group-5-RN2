import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../../redux/action'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from './Input'

const Register = ({ navigation }) => {
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(RegisterAction(values.full_name, values.email, values.password, values.phone_number, values.address, values.city))
        navigation.navigate('Login')
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const signUpValidationSchema = yup.object().shape({
        full_name: yup
            .string()
            .required('Name is required'),
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email is required'),
        password: yup
            .string()
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
        phone_number: yup
            .string()
            .required("required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "to short")
            .max(14, "to long"),
        address: yup
            .string()
            .required('Name is required'),
        city: yup
            .string()
            .required('Name is required'),
    })

    return (
        <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{ full_name: '', email: '', password: '', phone_number: '', address: '', city: '' }}
            onSubmit={handleSubmit}
        >
            {
                ({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <View>
                        <Input
                            placeholder={'Full Name'}
                            onChangeText={handleChange('full_name')}
                            error={errors.full_name}
                            value={values.full_name}
                        />
                        <Input
                            placeholder={'Email'}
                            onChangeText={handleChange('email')}
                            error={errors.email}
                            value={values.email}
                        />
                        <Input
                            placeholder={'Password'}
                            onChangeText={handleChange('password')}
                            secureTextEntry={true}
                            error={errors.password}
                            value={values.password}
                        />
                        <Input
                            placeholder={'phone_number'}
                            onChangeText={handleChange('phone_number')}
                            error={errors.phone_number}
                            value={values.phone_number}
                        />
                        <Input
                            placeholder={'address'}
                            onChangeText={handleChange('address')}
                            error={errors.address}
                            value={values.address}
                        />
                        <Input
                            placeholder={'city'}
                            onChangeText={handleChange('city')}
                            error={errors.city}
                            value={values.city}
                        />
                        <View style={{ padding: 8 }}>
                            <Button onPress={handleSubmit} title="Register" />
                        </View>
                    </View>
                )
            }
        </Formik>
    )
}

export default Register