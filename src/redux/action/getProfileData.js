import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from "../types";
import { API_GET_PROFILE } from "../../config";
import axios from 'axios';


export const ProfileData = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload: payload
});


export const profileData = (authToken) => async dispatch => { //method yang di panggil nanti di screen
  try {
    await axios.get(API_GET_PROFILE, {
      headers: {
        access_token: authToken,
      }
    })
      .then(value => {
        // console.log(value);
        dispatch(ProfileData(value.data));
        console.log('Get profile Success');

      });
  } catch (error) {
    console.log(error);
  }
};

