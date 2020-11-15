import React, { useContext, useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { AuthContext } from '../AuthProvider'
import BaseView from '../components/views/BaseView'
import LogoView from '../components/views/LogoView'
import StatusView from '../components/views/StatusView'
import ButtonControl from '../components/controls/ButtonControl'
import ToolbarButtonControl from '../components/controls/ToolbarButtonControl'
import firestore from '@react-native-firebase/firestore'
import themeColors from '../styles/themeColors'

const IndexScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext)
  const [openStatus, setOpenStatus] = useState(false)

  const scheme = useColorScheme()

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
      alignItems: 'flex-end',
    },

    headerView: {
      paddingBottom: 16,
    },

    contentView: {
      flex: 1,
      justifyContent: 'space-between'
    },

    scrollView: {
      overflow: 'visible',
      zIndex: 2
    },

    toggleButtonView: {
      zIndex: 1
    }
  })

  return (
    <BaseView background="backgroundGrouped">
      <View style={styles.toolbarTop}>
        <ToolbarButtonControl onPress={() => navigation.navigate('Settings')} text="Settings" />
      </View>
      <View style={styles.headerView}>
        <LogoView width='40%' height={64} />
      </View>
      <View style={styles.contentView}>
        <ScrollView style={styles.scrollView}>
          <StatusView openStatus={openStatus} />
        </ScrollView>
        {user &&
          <View style={styles.toggleButtonView}>
            <ButtonControl onPress={() => toggleOpenStatus()} text={openStatus ? "Close [cloud]" : "Open [cloud]"} color={openStatus ? "red" : "green"} />
          </View>
        }
      </View>
    </BaseView>
  )
}

export default IndexScreen
