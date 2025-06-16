import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import { Link } from 'expo-router'

const Welcome = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView safe={true} style={styles.container}>
      <Link href="(auth)/login" style={styles.link}>
        <ThemedText style={styles.title} title={true}>
          Login
        </ThemedText>
      </Link>
      <Spacer />
      <Link href="(auth)/register" style={styles.link}>
        <ThemedText style={styles.title} title={true}>
          Register
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
    },
    link: {
      marginVertical: 10,
      borderBottomWidth: 1
    },
})