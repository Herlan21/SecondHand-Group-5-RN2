import { GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILED } from "../types";
import { API_GET_NOTIFICATION } from "../../config";
import axios from 'axios';


export const NotificationData = payload => ({
    type: GET_NOTIFICATION_SUCCESS,
    payload: payload
});


export const notificationData = (authToken) => async dispatch => { //method yang di panggil nanti di screen
    try {
        await axios.get(API_GET_NOTIFICATION, {
            headers: {
                access_token: authToken,
            }
        })
            .then(value => {
                console.log(value);
                dispatch(NotificationData(value.data));
                console.log('Get Notification Success');
            });
    } catch (error) {
        console.log(error);
    }
};

