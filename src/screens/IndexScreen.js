import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { AuthContext } from '../AuthProvider'
import LogoView from '../components/views/LogoView'
import StatusView from '../components/views/StatusView'
import ButtonControl from '../components/controls/ButtonControl'
import ToolbarButtonControl from '../components/controls/ToolbarButtonControl'
import styleProperties from '../styles/styleProperties'
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

  const styles = StyleSheet.create({
    container: {
      padding: styleProperties.container.padding,
      flex: 1,
      justifyContent: 'flex-start'
    },

    toolbarTop: {
      alignItems: 'flex-end'
    },

    headerView: {
      paddingBottom: 16
    },

    contentView: {
      flex: 1,
      justifyContent: 'space-between'
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbarTop}>
        <ToolbarButtonControl onPress={() => user ? signOut() : navigation.navigate('SignIn')} text={user ? "Sign Out" : "Sign In"} color={user ? 'red' : 'blue'} />
      </View>
      <View style={styles.headerView}>
        <LogoView width='40%' height={64} />
      </View>
      <View style={styles.contentView}>
        <StatusView openStatus={openStatus} />
        {user &&
          <ButtonControl onPress={() => toggleOpenStatus()} text={openStatus ? "Close [cloud]" : "Open [cloud]"} color={openStatus ? "red" : "green"} />
        }
      </View>
    </SafeAreaView>
  )
}

export default IndexScreen
