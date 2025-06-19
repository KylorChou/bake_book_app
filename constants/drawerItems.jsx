import { Ionicons } from "@expo/vector-icons"

export const drawerItems = [
  {
    name: 'homepage',
    label: 'Home',
    icon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
  },
  {
    name: 'recipes',
    label: 'Recipes',
    icon: ({ color, size }) => <Ionicons name="book-outline" size={size} color={color} />,
  },
  {
    name: 'settings',
    label: 'Settings',
    icon: ({ color, size }) => <Ionicons name="cog-outline" size={size} color={color} />,
  }
]