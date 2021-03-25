// users
const CREATE_USER = 'users/custom/user';
const ACTIVATE_USER = 'users/custom/activate';
const LOGIN = 'users/custom/login';
const FORGOT_PASSWORD = 'users​/custom​/forget-password​';
const RESET_PASSWORD = 'users/custom/reset-password';
const VALIDATE_TOKEN = 'users/custom/validate-token';
const FACEBOOK_LOGIN = 'users/custom/facebook/login';
const GOOGLE_LOGIN = 'users/custom/google/login';
const UPDATE_USER_PROFILE = 'users/user';

// products
const GET_ALL_PRODUCTS = 'products';
const SINGLE_PRODUCT = 'products/product';
const GET_PRODUCTS_BY_SELLER_ID = 'products/seller';

// categories
const GET_ALL_CATEGORIES = 'categories';

const api = {
  CREATE_USER,
  ACTIVATE_USER,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VALIDATE_TOKEN,
  FACEBOOK_LOGIN,
  GOOGLE_LOGIN,
  UPDATE_USER_PROFILE,
  GET_ALL_PRODUCTS,
  SINGLE_PRODUCT,
  GET_PRODUCTS_BY_SELLER_ID,
  GET_ALL_CATEGORIES,
};

export default api;
