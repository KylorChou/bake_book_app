import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRecipes } from '../../hooks/useRecipes'
import { useRouter } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const Create = () => {
    const [name, setName] = useState('')
    const [tips, setTips] = useState('')
    const [bakeTime, setBakeTime] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [totalTime, setTotalTime] = useState('')
    const [ingredientList, setIngredientList] = useState('')
    const [instructions, setInstructions] = useState('')
    const [bakeTemp, setBakeTemp] = useState('')
    const [freezeTime, setFreezeTime] = useState('')
    const [loading, setLoading] = useState(false)

    const { createRecipe } = useRecipes()
    const router = useRouter()

    const handleSubmit = async () => {
        if (
            !name.trim() || !prepTime.trim() || 
            !totalTime.trim() || !ingredientList.trim() || 
            !instructions.trim()
        ) return
        
        setLoading(true)

        await createRecipe({ name, tips, bakeTime, prepTime, totalTime, ingredientList, instructions, bakeTemp, freezeTime })

        setName("")
        setTips("")
        setBakeTime("")
        setPrepTime("")
        setTotalTime("")
        setIngredientList("")
        setInstructions("")
        setBakeTemp("")
        setFreezeTime("")

        router.replace('/recipes')

        setLoading(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={true}
                >

                    <ThemedText title={true} style={styles.heading}>
                        Add a New Recipe
                    </ThemedText>
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.input}
                        placeholder="Recipe Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.input}
                        placeholder="Prep Time"
                        value={prepTime}
                        onChangeText={setPrepTime}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.input}
                        placeholder="Bake Time"
                        value={bakeTime}
                        onChangeText={setBakeTime}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.input}
                        placeholder="Total Time"
                        value={totalTime}
                        onChangeText={setTotalTime}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.input}
                        placeholder="Bake Temp"
                        value={bakeTemp}
                        onChangeText={setBakeTemp}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.input}
                        placeholder="Freeze Time"
                        value={freezeTime}
                        onChangeText={setFreezeTime}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.multiline}
                        placeholder="Ingredients"
                        value={ingredientList}
                        onChangeText={setIngredientList}
                        multiline={true}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.multiline}
                        placeholder="Instructions"
                        value={instructions}
                        onChangeText={setInstructions}
                        multiline={true}
                    />
                    <Spacer />

                    <ThemedTextInput 
                        style={styles.multiline}
                        placeholder="Tips and Tricks"
                        value={tips}
                        onChangeText={setTips}
                        multiline={true}
                    />
                    <Spacer />

                    <ThemedButton onPress={handleSubmit} disabled={loading}>
                        <Text style={{ color: '#fff' }}>
                            {loading ? "Saving..." : "Create Recipe"}
                        </Text>
                    </ThemedButton>

                </ScrollView>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingVertical: 20,
        paddingBottom: 300,
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    },
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    },
})