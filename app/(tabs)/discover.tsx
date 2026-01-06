import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const discover = () => {
    const {top} = useSafeAreaInsets();
  return (
    <View style={{paddingTop: top}}>
      <Text>discover</Text>
    </View>
  )
}

export default discover