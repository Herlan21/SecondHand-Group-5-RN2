import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { productData } from '../../redux/action/getProductData';
import { black } from '../../constant/index';

const Home = () => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.AuthReducers.authToken);
  const dataProduct = useSelector((state) => state.ProductReducer.dataProduct);

  const [categoryId, setCategoryId] = useState(0);
  const [querySearch, setQuerySearch] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    dispatch(productData({
      status: 'available',
      category_id: categoryId !== 0 ? categoryId : '',
      search: querySearch,
      page: page,
    }))
  }, [])


  return (
    <View style={styles.container}>

      <View>
        <Text>Home</Text>
        <Text>{dataProduct.name}</Text>
      </View>

    </View>
  );
};


export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  name: {
    color: black
  }
})

