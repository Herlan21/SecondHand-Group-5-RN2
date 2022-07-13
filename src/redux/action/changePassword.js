// import { UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILED } from "../types";
import { API_PUT_PASSWORD } from "../../config";
import axios from 'axios';


// export const changePassword = payload => ({
//     type: UPDATE_PASSWORD_SUCCESS,
//     payload: payload
// });


export const changePassword = (authToken, current_password, new_password, confirm_password, navigation) => async dispatch => {
    try {
        await axios.put(API_PUT_PASSWORD,
            // await axios.put('https://market-final-project.herokuapp.com/auth/change-password',
            {
                current_password,
                new_password,
                confirm_password
            }, {
            headers: {
                access_token: authToken,
                // access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbC5jb20iLCJpYXQiOjE2NTYwNjY5NjF9.ScQPjJiSfbvgaeuN8xQwC3yXZDw5F1_ToDLbS_HN844',
            }
        })
            .then(value => {
                console.log(value);
                navigation.navigate('MainApp')
                // dispatch(ProfileData(value.data));
                console.log('Get profile Success');

            });
    } catch (error) {
        console.log(error);
    }
};

