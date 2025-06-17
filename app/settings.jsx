import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'
import { useUser } from '../hooks/useUser'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import ThemedText from '../components/ThemedText'

const Settings = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const { logout, user } = useUser()

  return (
    <View style={{ flex: 1}}>
      <Header title="Settings" />
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.pageHead}>
          Settings
        </ThemedText>
        <Spacer />

        <ThemedText title={true} style={styles.head}>
          {user.email}
        </ThemedText>

        <ThemedButton onPress={logout}>
          <Text style={{ color: 'white' }}>Logout</Text>
        </ThemedButton>

      </ThemedView>
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
    },
    pageHead: {
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center'
    },
    head: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
    }
})