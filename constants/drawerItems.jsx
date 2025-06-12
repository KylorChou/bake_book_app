import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const drawerItems = () => {
  return (
    <View>
      <Text>drawerItems</Text>
    </View>
  )
}

export default drawerItems [
    {
        name: 'index',
        iconType: 'Ionicons',
        iconName: 'home',
    },
    {
        name: 'baked_page',
        iconType: 'Materiallcons',
        iconName: 'bakery-dining',
    },
    {
        name: 'frozen_page',
        iconType: 'FontAwesome5',
        iconName: 'ice-cream',
    },
    {
        name: 'settings',
        iconType: 'FontAwesome6',
        iconName: 'gear',
    }
]

const styles = StyleSheet.create({})