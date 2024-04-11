import { StyleSheet,Text,View,Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import Colors from '@/constants/Colors';
import products from '@assets/data/products';
import { Product } from '@/types';
const product = products[1];

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'


const ProductListItem = ({product}:ProductListItemProps)=>{
 return(
  <View style = {styles.container}>
      <Image source={{uri:product.image||defaultPizzaImage}} style ={styles.image} resizeMode='contain'/>
     <Text style = {styles.title}>{product.name}</Text>
     <Text style = {styles.price} >${product.price}</Text>
    </View>
 );
}

export default ProductListItem;

const styles = StyleSheet.create({

  container:{
    backgroundColor:'white',
    padding : 10,
    borderRadius:20,
    flex:1,
    maxWidth:'50%'
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  price :{
    color : Colors.light.tint,
    fontWeight: 'bold',
  },
  image:{
    width:'100%',
    aspectRatio : 1,
  }
});
