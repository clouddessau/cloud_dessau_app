import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { AuthContext } from '../AuthProvider'
import BaseView from '../components/views/BaseView'
import LogoView from '../components/views/LogoView'
import StatusView from '../components/views/StatusView'
import ButtonControl from '../components/controls/ButtonControl'
import ToolbarButtonControl from '../components/controls/ToolbarButtonControl'
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
    <BaseView>
      <View style={styles.toolbarTop}>
        <ToolbarButtonControl onPress={() => navigation.navigate('Settings')} text="Settings" />
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
    </BaseView>
  )
}

export default IndexScreen
