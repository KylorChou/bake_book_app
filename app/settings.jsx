import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"

const Settings = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={{ flex: 1}}>
      <Header title="Settings" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
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
        alignItems: 'center',
        fontSize: 16
    }
})