import { StyleSheet, Text, View, useColorScheme, FlatList, Pressable } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import { Colors } from "../../constants/Colors"
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { useRouter } from 'expo-router'
import { useRecipes }from '../../hooks/useRecipes'
import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'

const Recipes = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const router = useRouter()

  const { recipes } = useRecipes()

  return (
    <View style={{ flex: 1}}>
      <Header title="Recipes" />
      <ThemedView style={styles.container} safe={true}>

        <FlatList 
          data={recipes}
          keyExtractor={(item) => item.$id}
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <Pressable onPress={() => router.push(`/recipes/${item.$id}`)}>
              <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{item.name}</ThemedText>
              </ThemedCard>
            </Pressable>
          )}
        />

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
    },
    list: {
      marginTop: 40,
    },
    card: {
      width: "90%",
      marginHorizontal: "5%",
      marginVertical: 10,
      padding: 10,
      paddingLeft: 14,
      borderLeftColor: Colors.primary,
      borderLeftWidth: 4,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    }
})