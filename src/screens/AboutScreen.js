import React from 'react'
import { View, Text, Image, Linking, Alert, Platform, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import DeviceInfo from 'react-native-device-info'
import BasicSectionList from '../components/views/BasicSectionList'
import themeProperties from '../styles/themeProperties'
import themeColors from '../styles/themeColors'

const AboutScreen = ({ navigation }) => {
  const scheme = useColorScheme()

  const linkOpenFailedMessage = "The link could not be opened."

  const onItemSelected = (id) => {
    switch (id) {
      case "instagramItem":
        instagramAction()
        break
      case "discordItem":
        discordAction()
        break
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

  const styles = StyleSheet.create({
    appInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    appInfoIconContainer: {
      marginRight: themeProperties.container.padding * 1.5,
      shadowColor: themeColors.colors.black,
      shadowOffset: themeProperties.common.shadowOffset,
      shadowOpacity: themeProperties.common.shadowOpacity,
      shadowRadius: themeProperties.common.shadowRadius,
      elevation: 10
    },

    appInfoIcon: {
      width: 100,
      height: 100
    },

    appInfoText: {
      marginBottom: 2,
      color: themeColors.colors[scheme].text,
      fontSize: 16,
      fontWeight: 'bold'
    },

    appInfoSecondaryText: {
      color: themeColors.colors[scheme].textSecondary
    },

    appInfoSlogan: {
      color: themeColors.colors[scheme].textSecondary,
      marginTop: 8
    }
  })

  const appInfoListItem = () => {
    return (
      <View style={styles.appInfoContainer}>
        <View style={styles.appInfoIconContainer}>
          <Image style={styles.appInfoIcon} source={require('../../assets/images/app_icon.png')} />
        </View>
        <View>
          <Text style={styles.appInfoText}>Version {DeviceInfo.getVersion()}</Text>
          <Text style={styles.appInfoSecondaryText}>Build {DeviceInfo.getBuildNumber()}</Text>
          <Text style={styles.appInfoSlogan}>shaping campus life since 2016</Text>
        </View>
      </View>
    )
  }

  async function instagramAction() {
    let instagramURL = "https://instagr.am/cloud_dessau"

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
      Alert.alert(linkOpenFailedMessage)
    }
  }

  const listSections = [
    {
      title: "",
      data: [
        {
          title: "",
          customItem: appInfoListItem(),
          id: "appInfoItem"
        }
      ]
    },
    {
      title: "",
      data: [ 
        {
          title: "Send Feedback",
          leftIcon: "mail",
          id: "feedbackItem"
        }
      ]
    },
    {
      title: "Social",
      data: [
        {
          title: "Follow us on Instagram",
          leftIcon: "instagram",
          id: "instagramItem"
        },
        {
          title: "Join our Discord server",
          leftIcon: "discord",
          id: "discordItem"
        }
      ]
    },
    {
      title: "",
      data: [
        {
          title: "Open Source",
          leftIcon: "externalLink",
          id: "openSourceItem"
        }
      ]
    }
  ]

  return (
    <>
      <BasicSectionList sections={listSections} onItemSelected={id => onItemSelected(id)} listFooterText="© Johannes Jakob" />
    </>
  )
}

export default AboutScreen
