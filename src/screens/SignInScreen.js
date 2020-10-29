import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { AuthContext } from '../AuthProvider'
import TextInputStyles from '../styles/TextInputStyles'

const SignInScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets()
  const { colors } = useTheme()
  const textInputStyles = TextInputStyles()

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
        <Text>Email</Text>
        <TextInput style={textInputStyles.input} placeholder="Email" onChangeText={text => setEmail(text)} value={email} />
        <Text>Password</Text>
        <TextInput style={textInputStyles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} />
        <Button onPress={() => onSignIn()} title="Sign in" />
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
