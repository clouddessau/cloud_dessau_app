import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import BasicSectionList from '../components/views/BasicSectionList'

const SettingsScreen = ({ navigation }) => {
  const { user, signOut } = useContext(AuthContext)

  const accountListItemTitle = user ? user.email : "Sign In"
  const accountListItemSubtitle = user ? "Sign Out" : ""

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
