import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import { Colors } from "../../constants/Colors"
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { useRouter } from 'expo-router'

const Recipes = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const router = useRouter()

  return (
    <View style={{ flex: 1}}>
      <Header title="Recipes" />
      <ThemedView style={styles.container}>
        <Text>Recipes</Text>
        <Spacer />

        <ThemedButton onPress={() => router.push('/create')}>
          <Text style={styles.create}>Add a New Recipe</Text>
        </ThemedButton>
      </ThemedView>
    </View>
  )
}

export default Recipes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },
    create: {
      color: '#fff',
      textAlign: 'center'
    }
})