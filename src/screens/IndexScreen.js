import React, { useContext, useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { AuthContext } from '../AuthProvider'
import ButtonControl from '../components/controls/ButtonControl'
import firestore from '@react-native-firebase/firestore'

const IndexScreen = ({ navigation }) => {
  const { user, signOut } = useContext(AuthContext)
  const [openStatus, setOpenStatus] = useState(false)
  const { colors } = useTheme()

  const onFirestoreResult = (snapshot) => {
    setOpenStatus(snapshot.get('open'))
  }

  const onFirestoreError = (error) => {
    console.log(error)
  }

  firestore()
    .collection('status')
    .doc('cloud_status')
    .onSnapshot(onFirestoreResult, onFirestoreError)

  const toggleOpenStatus = () => {
    firestore()
      .collection('status')
      .doc('cloud_status')
      .update({
        'open': !openStatus
      })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => user ? signOut() : navigation.navigate('SignIn')} title={user ? "Sign Out" : "Sign In"} />
      )
    })
  }, [navigation, user]);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', paddingHorizontal: 16}}>
      <View>
        <View>
          <Text style={{ color: colors.text }}>{openStatus ? "Open!" : "Closed"}</Text>
        </View>
        {user &&
          <ButtonControl onPress={() => toggleOpenStatus()} text={openStatus ? "Close [cloud]" : "Open [cloud]"} color={openStatus ? "red" : "blue"} />
        }
      </View>
    </SafeAreaView>
  )
}

export default IndexScreen
