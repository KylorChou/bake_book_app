import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'

const OtherDesserts = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={{ flex: 1}}>
      <Header title="Other" />
      <ThemedView style={styles.container}>
        <Text>Other Desserts</Text>
      </ThemedView>
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