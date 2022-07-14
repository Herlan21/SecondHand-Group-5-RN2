import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { RegisterAction } from '../../redux/action/actionAuth'
import { changePassword } from '../../redux/action/changePassword'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from '../Auth/Input'



const Setting = ({ navigation }) => {

    const auth_Token = useSelector(state => state.AuthReducers.authToken);
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(changePassword(auth_Token.authToken, values.current_password, values.new_password, values.confirm_password, navigation))
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
    )
}

export default Setting