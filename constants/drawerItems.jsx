import { Ionicons } from "@expo/vector-icons"

export const drawerItems = [
  {
    name: 'index',
    label: 'Home',
    icon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
  },
  {
    name: 'frozen_page',
    label: 'Frozen',
    icon: ({ color, size }) => <Ionicons name="ice-cream-outline" size={size} color={color} />,
  },
  {
    name: 'baked_page',
    label: 'Baked',
    icon: ({ color, size }) => <Ionicons name="flame-outline" size={size} color={color} />,
  },
  {
    name: 'settings',
    label: 'Settings',
    icon: ({ color, size }) => <Ionicons name="cog-outline" size={size} color={color} />,
  },
  {
    name: 'other',
    label: 'Other',
    icon: ({ color, size }) => <Ionicons name="restaurant-outline" size={size} color={color} />,
  }
]