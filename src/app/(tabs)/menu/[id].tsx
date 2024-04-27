import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductListItem = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title:'Details :'+id}}/>
      <Text>ProductListItem id : {id}</Text>
    </View>
  )
}

export default ProductListItem;