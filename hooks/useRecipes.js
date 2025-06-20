import { useContext } from 'react'
import { RecipesContext } from '../contexts/RecipesContext'

export function useRecipes() {
    const context = useContext(RecipesContext)

    if (!context) {
        throw new Error("useUser must be used within a RecipesProvider")
    }

    return context
}