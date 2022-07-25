import { StyleSheet } from "react-native"
import { red, white, black } from '../constant/index';

const changePasswordStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: white,
    },

    lengkapiProfileText: {
        textAlign: "center",
        top: 20,
        fontWeight: "bold",
        color: black,
    },

    changePasswordInput: {
        alignSelf: 'center',
        borderColor: '#bbb',
        borderWidth: 1,
        width: 328,
        borderRadius: 5,
        padding: 12,
        top: 200,
    },

    yup: {
        color: red,
        top: 185,
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

export default changePasswordStyles