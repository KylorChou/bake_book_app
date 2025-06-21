import 'react-native-reanimated'

import { useColorScheme } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { drawerItems } from '../../constants/drawerItems'
import { Colors } from "../../constants/Colors"
import CustomDrawerContent from '../../components/CustomDrawerContent'
import UserOnly from '../../components/auth/UserOnly'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
      <UserOnly>
        <Drawer
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
            name="create"
            options={{ drawerItemStyle: { display: 'none' }}}
          />

          <Drawer.Screen 
            name="recipes/[id]"
            options={{ drawerItemStyle: { display: 'none' }}}
          />
        </Drawer>
      </UserOnly>
  )
}

export default RootLayout
