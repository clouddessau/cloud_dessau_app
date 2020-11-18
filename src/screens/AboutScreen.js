import React from 'react'
import { View, ScrollView, Linking, Alert, Platform, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import BasicSectionList from '../components/views/BasicSectionList'

const AboutScreen = ({ navigation }) => {
  const onItemSelected = (id) => {
    switch (id) {
      case "feedbackItem":
        feedbackAction()
        break
      case "openSourceItem":
        openSourceAction()
        break
      default:
        break
    }
  }

  async function feedbackAction() {
    let emailURL = `mailto:hi@johjakob.com?subject=[cloud]%20app%20(${Platform.OS === 'ios' ? 'iOS' : 'Android'})`

    const supported = await Linking.canOpenURL(emailURL)

    if (supported) {
      await Linking.openURL(emailURL)
    } else {
      Alert.alert("You can’t send emails from this device.")
    }
  }

  async function openSourceAction() {
    let openSourceURL = "https://gitlab.dessau.design/cloud/cloud_dessau_app"

    const supported = await Linking.canOpenURL(openSourceURL)

    if (supported) {
      await Linking.openURL(openSourceURL)
    } else {
      Alert.alert("The repository website could not be opened.")
    }
  }

  const listSections = [
    {
      title: "",
      data: [
        {
          title: "Send Feedback",
          id: "feedbackItem"
        }
      ]
    },
    {
      title: "",
      data: [
        {
          title: "Open Source",
          id: "openSourceItem"
        }
      ]
    }
  ]

  return (
    <BasicSectionList sections={listSections} onItemSelected={id => onItemSelected(id)} />
  )
}

export default AboutScreen
