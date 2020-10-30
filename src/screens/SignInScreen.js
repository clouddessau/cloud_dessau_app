import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { AuthContext } from '../AuthProvider'
import SignInForm from '../components/auth/SignInForm'
import TextInputControl from '../components/controls/TextInputControl'
import ButtonControl from '../components/controls/ButtonControl'

const SignInScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets()
  const { colors } = useTheme()

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
        <Button onPress={() => navigation.pop()} title="Cancel" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  }
})

export default SignInScreen
