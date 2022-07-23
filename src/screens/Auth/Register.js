import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../../redux/action/actionAuth'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from './Input'

import registerStyles from '../../styles/registerStyles'


const Register = ({ navigation }) => {
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(RegisterAction(values.full_name, values.email, values.password, values.phone_number, values.address, values.city, navigation))
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
        <ScrollView>
            <Formik
                validationSchema={signUpValidationSchema}
                initialValues={{ full_name: '', email: '', password: '', phone_number: '', address: '', city: '' }}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (


                        <View style={registerStyles.container}>
                            <Input style={registerStyles.textInput}
                                placeholder={'Full Name'}
                                onChangeText={handleChange('full_name')}
                                value={values.full_name}
                            />
                            {errors.full_name &&
                                <Text style={registerStyles.yup}>{errors.full_name}</Text>
                            }

                            <Input style={registerStyles.textInput}
                                placeholder={'Email'}
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            {errors.email &&
                                <Text style={registerStyles.yup}>{errors.email}</Text>
                            }

                            <Input style={registerStyles.textInput}
                                placeholder={'Password'}
                                onChangeText={handleChange('password')}
                                secureTextEntry={true}
                                value={values.password}
                            />
                            {errors.password &&
                                <Text style={registerStyles.yup}>{errors.password}</Text>
                            }

                            <Input style={registerStyles.textInput}
                                placeholder={'phone_number'}
                                onChangeText={handleChange('phone_number')}
                                value={values.phone_number}
                            />
                            {errors.phone_number &&
                                <Text style={registerStyles.yup}>{errors.phone_number}</Text>
                            }

                            <Input style={registerStyles.textInput}
                                placeholder={'address'}
                                onChangeText={handleChange('address')}
                                value={values.address}
                            />
                            {errors.address &&
                                <Text style={registerStyles.yup}>{errors.address}</Text>
                            }

                            <Input style={registerStyles.textInput}
                                placeholder={'city'}
                                onChangeText={handleChange('city')}
                                value={values.city}
                            />
                            {errors.city &&
                                <Text style={registerStyles.yup}>{errors.city}</Text>
                            }

                            <View style={registerStyles.wrapperRegisterButton}>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Text style={registerStyles.buttonRegisterText}>Register</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={registerStyles.wrapperLoginButton}>
                                <Text style={{ color: '#000' }}>Already have an account ? </Text>

                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ color: '#1b30d1', fontWeight: 'bold' }}>Login here</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </Formik>
        </ScrollView>
    )
}

export default Register