import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from "../constants/Colors"

const header = ({ title }) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.burger, { backgroundColor: theme.navBackground }]}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text style={{ fontSize: 24 , color: theme.text}}>{"☰"}</Text>
      </TouchableOpacity>
      <Text style={[styles.headText, { color: theme.text }]}>{title}</Text>
    </View>
  )
}

export default header

const styles = StyleSheet.create({
  burger: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headText: {
    fontSize: 18,
    marginLeft: 15,
  }
})