import { createContext, useState, useEffect } from "react"
import { ID, Query, Role } from "react-native-appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = "685374250023b934a6fc"
const COLLECTION_ID = "6853742d00030e70bc96"

export const RecipesContext = createContext()

export function RecipesProvider({ children }) {
    const[recipes, setRecipes] = useState([])
    const { user } = useUser()

    async function fetchRecipes() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userId', user.$id)
                ]
            )

            setRecipes(response.document)
        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchRecipeById(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function createRecipe(data) {
        try {
            const newRecipe = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delet(Role.user(user.$id)),
                ]
            )
        } catch (error) {
            console.error(error.message)
        }
    }

    async function deleteRecipe(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {

        if (user) {
            fetchRecipes()
        } else {
            setRecipes([])
        }

    }, [user])

    return (
        <RecipesContext.Provider
            value={{ recipes, fetchRecipes, fetchRecipeById, createRecipe, deleteRecipe }}
        >
            {children}
        </RecipesContext.Provider>
    )
}