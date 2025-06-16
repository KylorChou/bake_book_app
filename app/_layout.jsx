import 'react-native-reanimated'

import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { drawerItems } from '../constants/drawerItems'
import { Colors } from "../constants/Colors"
import CustomDrawerContent from '../components/CustomDrawerContent'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Drawer
      initialRouteName="index" 
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: '#555',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
      <Drawer.Screen
        name="(auth)/login"
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="(auth)/register"
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="index"
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer>
  )
}

export default RootLayout

const styles = StyleSheet.create({})