import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { useColorScheme } from 'react-native-appearance'
import theme from '../styles/theme'
import html from '../data/safety_measures/safetyMeasuresHTML'

const SafetyMeasuresScreen = () => {
  const scheme = useColorScheme()

  const content = html

  const styles = StyleSheet.create({
    heading: {
      color: theme.common.colors[scheme].text,
      fontSize: 20,
      fontWeight: '500'
    },

    text: {
      color: theme.common.colors[scheme].text
    }
  })

  return (
    <WebView originWhitelist={['*']} source={{ html: content }} />
  )
}

export default SafetyMeasuresScreen
