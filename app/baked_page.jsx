import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header'

const BakedGoods = () => {
  return (
    <View style={{ flex: 1}}>
      <Header title="Baked Goods" />
      <View style={styles.container}>
        <Text>Baked Goods</Text>
      </View>
    </View>
  )
}

export default BakedGoods

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 16
    }
})