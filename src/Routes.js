import React, { useContext, useEffect, useState } from 'react'
import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { AuthContext, AuthProvider } from './AuthProvider'
import { useColorScheme } from 'react-native-appearance'
import auth from '@react-native-firebase/auth'

import IndexScreen from './screens/IndexScreen'
import SignInScreen from './screens/SignInScreen'

enableScreens()

const RootStack = createNativeStackNavigator()
const SignInStack = createNativeStackNavigator()

const SignInStackNavigator = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="SignInScreen" component={SignInScreen} />
    </SignInStack.Navigator>
  )
}

const Routes = () => {
  const scheme = useColorScheme()
  const [initializing, setInitializing] = useState(true)
  const { user, setUser }  = useContext(AuthContext)

  const onAuthStateChanged = (user) => {
    setUser(user)

    if (initializing) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme }>
      <RootStack.Navigator>
        <RootStack.Screen options={{ headerTitle: "[cloud]", headerLargeTitle: true, headerTranslucent: true }} name="Index" component={IndexScreen} />
        <RootStack.Screen options={{ stackPresentation: "formSheet" }} name="SignIn" component={SignInStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
