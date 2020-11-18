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

  const aboutAction = () => {
    navigation.navigate('About')
  }

  const onItemSelected = (id) => {
    switch (id) {
      case "accountItem":
        accountAction()
        break
      case "aboutItem":
        aboutAction()
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
          leftIcon: "user",
          numberOfLines: 1,
          id: "accountItem"
        }
      ]
    },
    {
      title: "",
      data: [
        {
          title: "About",
          leftIcon: "info",
          rightIcon: "disclosureIndicator",
          id: "aboutItem"
        }
      ]
    }
  ]

  return (
    <BasicSectionList sections={listSections} onItemSelected={id => onItemSelected(id)} />
  )
}

export default SettingsScreen
