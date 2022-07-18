import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { productData } from '../../redux/action/getProductData';
import { getBanner } from '../../redux/action/getSeller';

import { black } from '../../constant/index';

const Home = () => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.AuthReducers.authToken);
  const dataProduct = useSelector((state) => state.ProductReducer.dataProduct);
  const dataBanner = useSelector((state) => state.ProductReducer.dataBanner);


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
    dispatch(getBanner())
    console.log(dataBanner);
  }, [dispatch, page, querySearch, categoryId])

  // const getAllProduct = useCallback(() => {
  //   dispatch(productData());
  // }, []);

  function header() {
    return (

      <ScrollView horizontal>
        {dataBanner.map((item) => (
          <Image
            key={item?.id}
            source={{ uri: item.image_url }}
            style={styles.image}
          />
        ))}
      </ScrollView>

      //   <FlatList
      //     data={dataBanner}
      //     keyExtractor={(item, index) => item.id + index.toString()}

      //     renderItem={({ item }) => (
      //       <Image
      //         source={{ uri: item.image_url }}
      //         style={styles.image}
      //       />
      //     )}
      //   />
    )
  }

return (
  <View style={styles.container}>
    <View>

      <FlatList
        data={dataProduct?.data}
        ListHeaderComponent={header}
        numColumns={2}
        keyExtractor={(item, index) => item.id + index.toString()}
        columnWrapperStyle={{
          marginBottom: 18,
          justifyContent: 'space-between',
        }}

        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image_url }}
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

