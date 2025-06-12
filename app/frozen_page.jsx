import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header'

const FrozenDesserts = () => {
  return (
    <View style={{ flex: 1}}>
      <Header title="Frozen Desserts" />
      <View style={styles.container}>
        <Text>Frozen Desserts</Text>
      </View>
    </View>
  )
}

export default FrozenDesserts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 16
    }
})