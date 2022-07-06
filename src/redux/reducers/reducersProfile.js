import {GET_PROFILE_SUCCESS, GET_PROFILE_FAILED,} from '../types';
  
  const initialState = {
    profileUser: [],
  };
  
  const ProfileReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_PROFILE_SUCCESS:
        return {
          ...state,
          profileUser: action.payload,
        };
      case GET_PROFILE_FAILED:
        return {
          ...state,
        };
      default:
        return state;
    }
  };

  export default ProfileReducer;