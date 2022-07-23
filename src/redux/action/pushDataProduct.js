import { API_POST_SELLER_PRODUCT } from "../../config";
import axios from 'axios';

export const postProduct = (authToken, name, description, base_price, location, category_ids, image, navigation) => async dispatch => {
    // console.log(name, description, base_price, category_ids, location, image)
    const config = { headers: { 'Content-Type': 'multipart/form-data', 'access_token': authToken } }
    try {
        // await axios.post(API_POST_SELLER_PRODUCT, payload, {
        await axios.post('https://market-final-project.herokuapp.com/seller/product', {
            name, description, base_price, location, category_ids, image
        }, config)
            // , name, description, base_price, location, config)
            .then(value => {
                console.log(value.data);
                // navigation.navigate('MainApp', { screen: 'DaftarJual' })
                console.log('Success Add Product');

            });
    } catch (error) {
        console.log(error);
    }
};

