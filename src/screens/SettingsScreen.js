import React, { useContext } from 'react'
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

  const onItemSelected = (id) => {
    switch (id) {
      case "accountItem":
        accountAction()
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
      title: "",
      data: [
        {
          title: "About the app",
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
