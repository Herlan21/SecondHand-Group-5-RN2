import { API_PUT_PROFILE } from "../../config";
import axios from 'axios';

export const changeProfile = (authToken,
    full_name, city, address, phone_number) => async dispatch => {
        try {
            await axios.put(API_PUT_PROFILE,
                {
                    full_name, city, address, phone_number
                }, {
                headers: {
                    access_token: authToken,
                }
            })
                .then(value => {
                    console.log(value.data);
                    // navigation.navigate('MainApp')
                    // // dispatch(ProfileData(value.data));
                    console.log('Success Update Profile');

                });
        } catch (error) {
            console.log(error);
        }
    };

