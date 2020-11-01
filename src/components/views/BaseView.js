import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styleProperties from '../../styles/styleProperties'

const BaseView = ({ children }) => {
  const styles = StyleSheet.create({
    view: {
      padding: styleProperties.container.padding,
      flex: 1
    }
  })

  return (
    <SafeAreaView style={styles.view}>
      {children}
    </SafeAreaView>
  )
}

export default BaseView
