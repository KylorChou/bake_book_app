import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useRecipes } from '../../../hooks/useRecipes'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState(null)

    const{ id } = useLocalSearchParams()

    const { fetchRecipeById } = useRecipes()

    useEffect(() => {
        async function loadRecipe() {
            const recipeData = await fetchRecipeById(id)
            setRecipe(recipeData)
        }

        loadRecipe()
    }, [id])

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText style={styles.name}>{recipe.name}</ThemedText>
    </ThemedView>
  )
}

export default RecipeDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    name: {

    },
    prep: {

    },
    bake: {

    },
    freeze: {

    },
    total: {

    },
    temp: {
        
    },
    ingredients: {

    },
    instructions: {

    },
    tips: {

    }
})