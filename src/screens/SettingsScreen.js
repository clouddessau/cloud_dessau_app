import React, { useContext } from 'react'
import { Linking, Alert, Platform } from 'react-native'
import { AuthContext } from '../AuthProvider'
import { useActionSheet } from '@expo/react-native-action-sheet'
import BasicSectionList from '../components/views/BasicSectionList'

const SettingsScreen = ({ navigation }) => {
  const { user, signOut } = useContext(AuthContext)
  const { showActionSheetWithOptions } = useActionSheet();

  const accountListItemTitle = user ? user.email : "Sign In"
  const accountListItemSubtitle = user ? "Sign Out" : ""

  const accountAction = () => {
    if (user) {
      showActionSheetWithOptions(
        {
          options: ["Cancel", "Sign Out"],
          cancelButtonIndex: 0,
          destructiveButtonIndex: 1
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            signOut()
          }
        }
      )
    } else {
      navigation.navigate('SignIn')
    }
  }

  async function feedbackAction() {
    let emailURL = `mailto:hi@johjakob.com?subject=[cloud]%20app%20(${Platform.OS === 'ios' ? 'iOS' : 'Android'})`

    const supported = await Linking.canOpenURL(emailURL)

    if (supported) {
      await Linking.openURL(emailURL)
    } else {
      Alert.alert(`The URL ${emailURL} cannot be opened on this device.`)
    }
  }

  const onItemSelected = (id) => {
    switch (id) {
      case "accountItem":
        accountAction()
        break
      case "feedbackItem":
        feedbackAction()
        break
      default:
        break
    }
  }

  const listSections = [
    {
      title: "Admin",
      data: [
        {
          title: accountListItemTitle,
          subtitle: accountListItemSubtitle,
          subtitleColor: "red",
          id: "accountItem"
        }
      ]
    },
    {
      title: "About",
      data: [
        {
          title: "Send Feedback",
          id: "feedbackItem"
        }
      ]
    }
  ]

  return (
    <BasicSectionList sections={listSections} onItemSelected={id => onItemSelected(id)} />
  )
}

export default SettingsScreen
