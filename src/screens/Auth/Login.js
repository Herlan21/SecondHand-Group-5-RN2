import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login } from '../../redux/action/actionAuth'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from './Input'

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    
    const handleSubmit = (values) => {
        dispatch(Login(values.email, values.password))
        console.log(values.password)
    };

    const signUpValidationSchema = yup.object().shape({
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
    })

    return (
        <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
        >
            {
                ({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <View>
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
                        <View style={{ padding: 8 }}>
                            <Button onPress={handleSubmit} title="Login" />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ color: 'blue' }}>Register</Text>
                        </TouchableOpacity>

                    </View>
                )
            }
        </Formik>
    )
}

export default LoginScreen