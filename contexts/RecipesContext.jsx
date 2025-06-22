import { createContext, useState, useEffect } from "react"
import { ID, Query, Role, Permission } from "react-native-appwrite"
import { useUser } from "../hooks/useUser"
import { databases, client } from '../lib/appwrite'

const DATABASE_ID = "685374250023b934a6fc"
const COLLECTION_ID = "6853742d00030e70bc96"

export const RecipesContext = createContext()

export function RecipesProvider({ children }) {
    const [recipes, setRecipes] = useState([])
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

            setRecipes(response.documents)
            console.log(response.documents)
        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchRecipeById(id) {
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )

            return response
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
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        } catch (error) {
            console.error(error.message)
        }
    }

    async function deleteRecipe(id) {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        let unsubscribe
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

        if (user) {
            fetchRecipes()

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response

                if (events[0].includes('create')) {
                    setRecipes((prevRecipes) => [...prevRecipes, payload])
                }

                if (events[0].includes('delete')) {
                    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.$id !== payload.$id))
                }
            })
        } else {
            setRecipes([])
        }

        return () => {
            if (unsubscribe) unsubscribe()
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