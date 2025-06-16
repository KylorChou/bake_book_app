import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={{ flex: 1 }}>
      <Header title="Home" />
      <ThemedView style={styles.container} safe={true}>
        <ThemedText style={styles.title} title={true}>
          Recently Opened
        </ThemedText>
        <Spacer />
        <ThemedText style={styles.title} title={true}>
          Favorites
        </ThemedText>
      </ThemedView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
    },
})