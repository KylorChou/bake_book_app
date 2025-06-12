import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header'

const OtherDesserts = () => {
  return (
    <View style={{ flex: 1}}>
      <Header title="Other" />
      <View style={styles.container}>
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
        alignContent: 'center',
        fontSize: 16
    }
})