import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
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
    console.log('ini dataProduct', dataProduct)
   
  }, [dispatch])

  // const getAllProduct = useCallback(() => {
  //   dispatch(productData());
  // }, []);


  return (
    <View style={styles.container}>
      <View>
          <FlatList 
            data = {dataProduct?.data}
            numColumns={2}
            keyExtractor={(item, index) => item.id + index.toString()}
            columnWrapperStyle={{
                marginBottom: 18,
                justifyContent: 'space-between',
              }}
                renderItem={({ item }) => (
                <Image 
                  source={{ uri : item.image_url }}
                  style={styles.image}
                />
              )}
          />
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
  },

  image: {
    height: 100,
    width: 150,
  }
})

