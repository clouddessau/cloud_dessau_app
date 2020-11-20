import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native-appearance'
import themeProperties from '../../styles/themeProperties'
import themeColors from '../../styles/themeColors'

const BaseView = (props) => {
  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    view: {
      padding: themeProperties.container.padding,
      backgroundColor: themeColors.colors[scheme][props.background],
      flex: 1
    }
  })

  return (
    <SafeAreaView style={styles.view}>
      {props.children}
    </SafeAreaView>
  )
}

BaseView.propTypes = {
  background: PropTypes.oneOf(['background', 'backgroundGrouped', 'backgroundSecondary'])
}

BaseView.defaultProps = {
  background: 'background'
}

export default BaseView