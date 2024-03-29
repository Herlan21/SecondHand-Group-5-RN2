export const API_BASE_URL = 'https://market-final-project.herokuapp.com';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// AUTH
export const API_LOGIN = getApiUrl('/auth/login');

export const API_REGISTER = getApiUrl('/auth/register');

export const API_GET_PROFILE = getApiUrl('/auth/user');

export const API_PUT_PROFILE = getApiUrl('/auth/user');

export const API_PUT_PASSWORD = getApiUrl('/auth/change-password');

// BUYER
export const API_GET_PRODUCT = getApiUrl('/buyer/product');

// BUYER BID
export const API_BID_PRODUCT = getApiUrl('/buyer/order');

// SELLER
export const API_GET_CATEGORY = getApiUrl('/seller/category');
export const API_GET_BANNER = getApiUrl('/seller/banner');
export const API_GET_SELLER_PRODUCT = getApiUrl('/seller/product');
export const API_POST_SELLER_PRODUCT = getApiUrl('/seller/product');

//notification
export const API_GET_NOTIFICATION = getApiUrl('/notification');
