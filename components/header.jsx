import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.burger}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text style={{ fontSize: 24 , color: 'white'}}>{"☰"}</Text>
      </TouchableOpacity>
      <Text style={styles.headText}>{title}</Text>
    </View>
  )
}

export default header

const styles = StyleSheet.create({
  burger: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1b1d57',
  },
  headText: {
    fontSize: 18,
    marginLeft: 15,
    color: 'white',
  }
})