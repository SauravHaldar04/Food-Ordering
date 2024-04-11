import { View ,FlatList} from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';

import Colors from '@/constants/Colors';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';
const product = products[1];



export default function MenuScreen() {
  return (
    <View>
      <FlatList data={products} renderItem={({item})=>{
        return ProductListItem({product:item});
      }} 
      numColumns={2}
      contentContainerStyle={{gap:10,padding:10}}
      columnWrapperStyle={{gap:10}}
      />
    </View>
  );
}
