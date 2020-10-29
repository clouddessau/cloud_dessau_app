import React, { useContext, useLayoutEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../AuthProvider'
import firestore from '@react-native-firebase/firestore'

const IndexScreen = ({ navigation }) => {
  const { user, signOut } = useContext(AuthContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => user ? signOut() : navigation.navigate('SignIn')} title={user ? "Sign Out" : "Sign In"} />
      )
    })
  }, [navigation, user]);

  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default IndexScreen
