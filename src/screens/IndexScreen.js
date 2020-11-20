import React, { useContext, useState } from 'react'
import { View, ScrollView, Linking, Alert, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { AuthContext } from '../AuthProvider'
import BaseView from '../components/views/BaseView'
import LogoView from '../components/views/LogoView'
import StatusView from '../components/views/StatusView'
import ButtonControl from '../components/controls/ButtonControl'
import ToolbarButtonControl from '../components/controls/ToolbarButtonControl'
import firestore from '@react-native-firebase/firestore'
import themeProperties from '../styles/themeProperties'

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

  async function instagramAction() {
    let instagramURL = "https://instagram.com/cloud_dessau"

    const supported = await Linking.canOpenURL(instagramURL)

    if (supported) {
      await Linking.openURL(instagramURL)
    } else {
      Alert.alert(linkOpenFailedMessage)
    }
  }

  async function discordAction() {
    let discordURL = "https://discord.gg/DjSgmyU"

    const supported = await Linking.canOpenURL(discordURL)

    if (supported) {
      await Linking.openURL(discordURL)
    } else {
      Alert.alert(linkOpenFailedMessage)
    }
  }

  const styles = StyleSheet.create({
    toolbarTop: {
      marginBottom: themeProperties.container.padding / 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    contentView: {
      flex: 1,
      justifyContent: 'space-between'
    },

    scrollView: {
      marginTop: themeProperties.container.padding * -2,
      marginHorizontal: themeProperties.container.padding * -1,
      overflow: 'visible',
      zIndex: 2
    },

    socialLinksView: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    spacer: {
      width: themeProperties.container.padding
    },

    toggleButtonView: {
      marginTop: themeProperties.container.padding,
      zIndex: 1
    }
  })

  return (
    <BaseView background="backgroundGrouped">
      <View style={styles.toolbarTop}>
        <LogoView width='35%' height={64} maxWidth={160} />
        <ToolbarButtonControl onPress={() => navigation.navigate('Settings')} icon="settings" />
      </View>
      <View style={styles.contentView}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingHorizontal: themeProperties.container.padding, paddingVertical: themeProperties.container.padding * 2 }}>
          <StatusView openStatus={openStatus} />
        </ScrollView>
        <View style={styles.socialLinksView}>
          <ToolbarButtonControl onPress={() => instagramAction()} icon="instagram" color="textTertiary" iconSize={themeProperties.icon.size * .8} />
          <View style={styles.spacer} />
          <ToolbarButtonControl onPress={() => discordAction()} icon="discord" color="textTertiary" />
        </View>
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