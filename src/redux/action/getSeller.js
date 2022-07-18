import { GET_BANNER_SUCCESS, GET_BANNER_FAILED} from "../types";
import { API_GET_BANNER } from "../../config";
import axios from "axios";

export const getBannerSuccess = payload => ({
    type: GET_BANNER_SUCCESS,
    payload: payload
  });
  
  export const getBannerFailed = () => ({
    type: GET_BANNER_FAILED,
  });

  export const getBanner = () => async dispatch => {
    try {
      await axios.get(API_GET_BANNER)
        .then(value => {
          dispatch(getBannerSuccess(value.data));
          console.log('Get banner Success');
        });
    } catch (error) {
      dispatch(getBannerFailed());
      console.log(error);
    }
  };