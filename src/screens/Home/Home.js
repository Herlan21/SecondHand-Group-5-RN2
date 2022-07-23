import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import Icon from 'react-native-vector-icons/Feather';
import { Searchbar } from 'react-native-paper';

import { productData, productDetail } from '../../redux/action/getProductData';
import { getBanner, getCategories } from '../../redux/action/getSeller';

import { black, white, purple1, purple } from '../../constant/index';
import { Card } from '../../components';
import homeStyles from '../../styles/homeStyles'

const Home = ({ navigation }) => {

  const { width, height } = Dimensions.get('screen');
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
      <View style={homeStyles.wrapperSearch}>
        {/* Seearch */}
        <Searchbar
          placeholder="Search"
          onChangeText={setQuerySearch}
          value={querySearch}
        />


        {/* BANNER */}
        <View style={homeStyles.wrapperPagerView}>
          <PagerView
            initialPage={0}
            style={homeStyles.pagerview}>

            {dataBanner?.map((item) => (

              <Image
                key={item.id}
                style={homeStyles.image}
                source={{ uri: item.image_url }}
              />
            ))}
          </PagerView>
        </View>

        {/* CATEGORIES */}

        <View style={homeStyles.wrapperCategory}>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={[homeStyles.categoryButton, { backgroundColor: categoryId === 0 ? purple : purple1 }]} onPress={() => { setCategoryId(0); setPage(1) }}>
              <Icon name="search" size={20} color="white" style={[homeStyles.categoryIcon, { color: categoryId === 0 ? white : black }]} />
              <Text style={[homeStyles.categoryName, { color: categoryId === 0 ? white : black }]}>Semua</Text>
            </TouchableOpacity>

            {dataCategories?.map((item) => (

              <TouchableOpacity style={[homeStyles.categoryButton, { backgroundColor: categoryId === item.id ? purple : purple1 }]} key={item?.id} onPress={() => { setCategoryId(item.id) }}>
                <Icon name="search" size={20} color="white" style={[homeStyles.categoryIcon, { color: categoryId === item.id ? white : black }]} />
                <Text style={[homeStyles.categoryName, { color: categoryId === item.id ? white : black }]}>{item?.name}</Text>
              </TouchableOpacity>

            ))}
          </ScrollView>

        </View>
      </View>
    )
  }

  const footer = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
        <TouchableOpacity onPress={() => setPage(page - 1)} disabled={page === 1} style={homeStyles.nextPrevious}>
          <Text style={homeStyles.textPage}>Previous</Text>
        </TouchableOpacity>

        <Text>{page}</Text>
        <TouchableOpacity onPress={() => setPage(page + 1)} style={homeStyles.nextPrevious}>
          <Text style={homeStyles.textPage}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
    <View style={homeStyles.container}>
      <View>
        <FlatList
          data={dataProduct}
          ListHeaderComponent={header}
          ListFooterComponent={footer}
          ListEmptyComponent={<Text>Tidak Ada Produk</Text>}
          numColumns={2}
          keyExtractor={(item, index) => item.id + index.toString()}
          showsVerticalScrollIndicator={false}
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
              style={{ marginHorizontal: 13 }}
              onPress={() => navigation.navigate('Detail', { IdProduct: item.id })}
            />
          )}
        />
      </View>
    </View>
  );
};


export default Home

const styles = StyleSheet.create({})

