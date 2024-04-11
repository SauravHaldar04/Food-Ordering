import { StyleSheet,Text,View,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

import Colors from '@/constants/Colors';
import products from '@/assets/data/products';

const product = products[1];

const ProductListItem = ({product})=>{
 return(
  <View style = {styles.container}>
      <Image source={{uri:product.image}} style ={styles.image}/>
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
    borderRadius:20
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
