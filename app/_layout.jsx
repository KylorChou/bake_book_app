import { useColorScheme } from 'react-native'
import { UserProvider } from '../contexts/UserContext'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { RecipesProvider } from '../contexts/RecipesContext'

export default function Rootlayout() {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserProvider>
      <RecipesProvider>
          <StatusBar value="auto" />
          <Stack initialRouteName='index'
              screenOptions={{ headerShown: false, animation: "none" }}
          >
          </Stack>
        </RecipesProvider>
    </UserProvider>
  )
}