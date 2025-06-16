import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from "../constants/Colors"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const header = ({ title }) => {
  const navigation = useNavigation()
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.header, { paddingTop: insets.top,
      backgroundColor: theme.navBackground
     }]}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu-outline" size={28} color={theme.headText} />
      </TouchableOpacity>
      <Text style={[styles.text, { color: theme.headText }]}>{title}</Text> 
    </View>
  )
}

export default header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold'
  }
})