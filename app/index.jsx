import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header'

const Home = () => {
  return (
    <View style={{ flex: 1}}>
      <Header title="Home" />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 16
    }
})