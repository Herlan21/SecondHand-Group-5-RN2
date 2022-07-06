import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from "../types";
import { API_GET_PROFILE } from "../../config";
import axios from 'axios';


export const ProfileData = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload: payload
});

// export const profileData = (full_name, email) => {
//   return dispatch => {
//       axios.get(API_GET_PROFILE, {
//           full_name,
//           email
//       }).then(res => {
//           let data = res.data
//           let ApiToken = data.access_token
//           console.log(data.access_token)

//           dispatch({payload: {authToken: ApiToken,}})
//           dispatch(ProfileData(res.data))
//           console.log('Get profile data berhasil');
//       })
//   }
// }

export const profileData = (authToken) => async dispatch => {
  try {
    await axios.get('https://market-final-project.herokuapp.com/auth/user/', {
      headers: {
        access_token: authToken, 
      }
    })
      .then(value => {
        console.log(value);
        dispatch(ProfileData(value.data));
      
      });
  } catch (error) {
    console.log(error);
  }
};


// export function profileData() {
//   return async dispatch => {
//     await axios.get(API_GET_PROFILE)
//       .then(async response => {
//         dispatch(ProfileData(response.data))
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }