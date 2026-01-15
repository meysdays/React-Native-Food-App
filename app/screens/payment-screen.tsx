import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { SharedHeader } from '@/components/shared'

const PaymentScreen = () => {
    const {total} = useLocalSearchParams();
    const {top} = useSafeAreaInsets();
    const [message, setMessage] = useState<string>("137 Teaticket Hwy, East Falmouth MA 2536")
  return (
    <View style={{paddingTop: top}}>

        <SharedHeader></SharedHeader>

        <Text>{message}</Text>
      <Text>PaymentScreen</Text>
      <Text>{total}</Text>
    </View>
  )
}

export default PaymentScreen