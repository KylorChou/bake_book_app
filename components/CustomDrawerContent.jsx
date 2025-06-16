import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import ThemedView from './ThemedView'

const CustomDrawerContent = (props) => {
  return (
    <ThemedView safe={true} style={styles.safeArea}>
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Menu</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </ThemedView>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})