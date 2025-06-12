import 'react-native-reanimated'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { drawerItems } from '../constants/drawerItems'

const RootLayout = () => {
  return (
    <Drawer 
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: '#555',
      }}
    >
      {drawerItems.map((item) => (
        <Drawer.Screen 
          key={item.name}
          name={item.name}
          options={{
            drawerLabel: item.label,
            drawerIcon: item.icon,
          }}
        />
      ))}
    </Drawer>
  )
}

export default RootLayout

const styles = StyleSheet.create({})