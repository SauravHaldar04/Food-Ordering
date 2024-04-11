import { StyleSheet,Text,View,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

import Colors from '@/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';
const product = products[1];



export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product = {products[0]}/>
      <ProductListItem product = {products[1]}/>
      <ProductListItem product = {products[5]}/>
    </View>
  );
}
