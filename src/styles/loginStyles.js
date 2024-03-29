import { StyleSheet } from "react-native"
import { red } from '../constant/index';

const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    textInput: {
        alignSelf: 'center',
        borderColor: '#bbb',
        borderWidth: 1,
        width: 328,
        borderRadius: 5,
        padding: 12,
        top: 200,
    },

    Login: {
        color: red,
        top: 190,
        left: 20,
    },

    wrapperloginButton: {
        display: 'flex',
        top: 200,
        marginHorizontal: 40,
        elevation: 6
    },

    wrapperRegisterButton: {
        marginTop: 220,
        flexDirection: 'row',
        justifyContent: 'center'

    },

})

export default loginStyles