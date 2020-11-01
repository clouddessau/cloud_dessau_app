import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../AuthProvider'
import SignInForm from '../components/auth/SignInForm'
import ToolbarButtonControl from '../components/controls/ToolbarButtonControl'

const SignInScreen = ({ navigation }) => {
  const { user, error, signIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSignIn = () => {
    signIn(email, password)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Admin Sign In",
      headerShown: true,
      headerRight: () => (
        <ToolbarButtonControl onPress={() => navigation.pop()} text="Cancel" />
      )
    })
  }, [navigation])

  useEffect(() => {
    if (user) {
      navigation.pop()
    }
  }, [user])

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error.message)
    }
  }, [error])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: Platform.OS === 'android' ? 16 : 0
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SignInForm
          usernameLabel="Email"
          onUsernameEdited={text => setEmail(text)}
          onPasswordEdited={text => setPassword(text)}
          onSubmit={() => onSignIn()}
          usernameValue={email}
          passwordValue={password}
          usernameIsEmail={true}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
