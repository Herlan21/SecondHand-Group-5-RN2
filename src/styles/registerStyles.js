import { StyleSheet } from "react-native"
import { black, white, purple1, shadow, gray1, purple, red } from '../constant/index';

const registerStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    formik:{
        top: 10
    },

    textInput: {
        alignSelf: 'center',
        borderColor: '#bbb',
        borderWidth: 1,
        width: 328,
        borderRadius: 5,
        padding: 12,
        top: 30,
    },

    wrapperRegisterButton: {
        backgroundColor: purple,
        marginHorizontal: 40,
        borderRadius: 10,
        paddingVertical: 8,
        marginVertical: 30,
    },

    buttonRegisterText :{
        color: white,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 15,
    },

    wrapperLoginButton :{
        marginTop: -20,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    yup: {
        color: red,
        marginLeft: 20,
        top: 10
    }

})

export default registerStyles