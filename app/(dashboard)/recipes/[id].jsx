import { StyleSheet, Text, View } from 'react-native'
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
        <ThemedText style={styles.name} title={true}>{recipe.name}</ThemedText>
        <Spacer height={30} />

        <View style={styles.line}>
            <ThemedText style={styles.time}>Prep Time: {recipe.prepTime} | </ThemedText>
            <ThemedText style={styles.time}>Bake Time: {recipe.bakeTime} | </ThemedText>
            <ThemedText style={styles.time}>Freeze Time: {recipe.freezeTime}</ThemedText>
        </View>
        <Spacer />

        <View style={styles.line}>
            <ThemedText style={styles.total}>Total Time: {recipe.totalTime} | </ThemedText>
            <ThemedText style={styles.temp}>Bake Temp: {recipe.bakeTemp}</ThemedText>
        </View>
        <Spacer height={30} />

        <ThemedText style={styles.header} title={true}>Ingredients</ThemedText>
        <Spacer height={10}/>
        <ThemedText style={styles.ingredients}>{recipe.ingredientList}</ThemedText>
        <Spacer height={40}/>
        
        <ThemedText style={styles.header} title={true}>Instructions</ThemedText>
        <Spacer height={10} />
        <ThemedText style={styles.instructions}>{recipe.instructions}</ThemedText>
        <Spacer height={60} />

        <ThemedText style={styles.header} title={true}>Tips</ThemedText>
        <Spacer height={10} />
        <ThemedText style={styles.tips}>{recipe.tips}</ThemedText>

        <Spacer height={60} />

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
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    time: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    total: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    temp: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    ingredients: {
        textAlign: 'left',
        width: '80%',
        lineHeight: 20,
        fontSize: 15,
    },
    instructions: {
        textAlign: 'left',
        width: '80%',
        lineHeight: 20,
        fontSize: 15,
    },
    tips: {
        textAlignt: 'left',
        width: '80%',
        lineHeight: 20,
        fontSize: 20,
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center'
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        borderBottomWidth: 2,
        fontSize: 20,
    },
})