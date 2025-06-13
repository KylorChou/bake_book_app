import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"

const OtherDesserts = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={{ flex: 1}}>
      <Header title="Other" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text>Other Desserts</Text>
      </View>
    </View>
  )
}

export default OtherDesserts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    }
})