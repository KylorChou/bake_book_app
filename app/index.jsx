import { StyleSheet, View, useColorScheme } from 'react-native'
import React, {useRef} from 'react'
import Header from '../components/header'
import { Colors } from "../constants/Colors"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import { Link } from 'expo-router'
import Animated, { SlideInDown, SlideInUp, 
  useSharedValue, useAnimatedStyle, withTiming, runOnJS }
   from 'react-native-reanimated'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const router = useRouter()

  const slideUp = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slideUp.value }],
    opacity: 1 - Math.abs(slideUp.value / 100)
  }))

  const handlePress = (target) => {
    slideUp.value = withTiming(-100, { duration: 400}, (finished) => {
      if (finished) {
        runOnJS(router.push)(target)
      }
    })
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Animated.View entering={SlideInUp.duration(2000).delay(1)}>
          <ThemedText style={styles.welcome}>
            Welcome to
          </ThemedText>
          <ThemedText style={styles.welcome}>
            Bakebook!
          </ThemedText>
        </Animated.View>

        <Spacer height={200} />

        <Animated.View entering={SlideInDown.duration(3000).delay(1)}>
            <ThemedText onPress={() => handlePress('(auth)/login')} 
            style={styles.title} title={true}>
              Click Here to Login
            </ThemedText>
        </Animated.View>

        <Spacer />

        <Animated.View entering={SlideInDown.duration(3000).delay(1)}>
            <ThemedText onPress={() => handlePress('(auth)/register')} 
            style={styles.title} title={true}>
              Click Here to Register
            </ThemedText>
        </Animated.View>
      </Animated.View>
    </ThemedView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      borderBottomWidth: 1,
      alignSelf: 'flex-start',
    },
    link: {
      marginVertical: 10,
      borderBottomWidth: 1
    },
    welcome: {
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center'
    }
})