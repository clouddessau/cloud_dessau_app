import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../AuthProvider'
import BaseView from '../components/views/BaseView'
import BasicSectionList from '../components/views/BasicSectionList'

const SettingsScreen = ({ navigation }) => {
  const { user, signOut } = useContext(AuthContext)
  
  const insets = useSafeAreaInsets()
  const largeHeaderInset = insets.top + 96

  const accountListItemTitle = user ? user.email : "Sign In"
  const accountListItemSubtitle = user ? "Sign Out" : "Test"

  const listSections = [
    {
      title: "Admins",
      data: [
        {
          title: accountListItemTitle,
          subtitle: accountListItemSubtitle,
          subtitleColor: "red",
          key: "accountListItem"
        }
      ]
    },
    {
      title: "",
      data: [
        {
          title: "About the app",
          key: "aboutListItem"
        }
      ]
    }
  ]

  return (
    <BasicSectionList sections={listSections} />
  )
}

export default SettingsScreen
