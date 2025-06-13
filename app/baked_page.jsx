import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"

const BakedGoods = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={{ flex: 1}}>
      <Header title="Baked Goods" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
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
        alignItems: 'center',
        fontSize: 16
    }
})