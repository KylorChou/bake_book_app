import { StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useRecipes } from '../../../hooks/useRecipes'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/Colors'

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState(null)

    const{ id } = useLocalSearchParams()

    const { fetchRecipeById, deleteRecipe } = useRecipes()

    const handleDelete = async () => {
        await deleteRecipe(id)
        setRecipe(null)
        router.replace('/recipes')
    }

    useEffect(() => {
        async function loadRecipe() {
            const recipeData = await fetchRecipeById(id)
            setRecipe(recipeData)
        }

        loadRecipe()
    }, [id])

    if (!recipe) {
        return (
            <ThemedView safe={true} styles={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedText style={styles.name}>{recipe.name}</ThemedText>

        <ThemedButton style={styles.delete} onPress={handleDelete}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>
                Delete Recipe
            </Text>
        </ThemedButton>
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

    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center'
    }
})