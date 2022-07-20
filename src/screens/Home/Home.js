import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';

import { productData, productDetail } from '../../redux/action/getProductData';
import { getBanner, getCategories } from '../../redux/action/getSeller';

import { black } from '../../constant/index';
import { Card } from '../../components';

const Home = ({ navigation }) => {

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const token = useSelector(state => state.AuthReducers.authToken);
  const dataProduct = useSelector((state) => state.ProductReducer.dataProduct);
  const dataBanner = useSelector((state) => state.ProductReducer.dataBanner);
  const dataCategories = useSelector((state) => state.ProductReducer.dataCategories);
  const dataDetail = useSelector((state) => state.ProductReducer.detailProduct);

  const [categoryId, setCategoryId] = useState(0);
  const [querySearch, setQuerySearch] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {

    if (isFocused) {
      dispatch(productData({
        status: 'available',
        category_id: categoryId !== 0 ? categoryId : '',
        search: querySearch,
        page: page,
      }))
      console.log('ini dataProduct', dataProduct)

      dispatch(getBanner())
      console.log(dataBanner);

      dispatch(getCategories())
      console.log('sukses bro kategorii GERA CAIR!', dataCategories);
    }
  }, [dispatch, page, querySearch, categoryId])


  function header() {
    return (

      <View>
        <TouchableOpacity>
          <ScrollView horizontal>
            {dataCategories?.map((item) => (
              <TouchableOpacity
                key={item?.id}>
                <Text>{item?.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </TouchableOpacity>
        

        <View>
          <ScrollView horizontal>
            {dataBanner?.map((item) => (
              <TouchableOpacity>
                <Image
                  key={item.id}
                  source={{ uri: item.image_url }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>


      <View>
        <FlatList
          data={dataProduct}
          ListHeaderComponent={header}
          numColumns={2}
          keyExtractor={(item, index) => item.id + index.toString()}
          columnWrapperStyle={{
            marginBottom: 18,
            justifyContent: 'space-between',
          }}

          renderItem={({ item }) => (
            <Card

              name={item?.name}
              category={item?.Categories}
              basePrice={item?.base_price}
              imageUrl={item?.image_url}
              onPress={() => navigation.navigate('Detail', { IdProduct: item.id })}
            />

            // <TouchableOpacity>
            //   <Image
            //     source={{ uri: item.image_url }}
            //     style={styles.image}
            //   />
            // </TouchableOpacity>
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

