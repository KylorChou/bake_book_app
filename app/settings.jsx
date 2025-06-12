import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header'

const Settings = () => {
  return (
    <View style={{ flex: 1}}>
      <Header title="Settings" />
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 16
    }
})