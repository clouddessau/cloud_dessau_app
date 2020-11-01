import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native-appearance'
import themeColors from '../../styles/themeColors'
import styleProperties from '../../styles/styleProperties'

const StatusView = (props) => {
  const scheme = useColorScheme()
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: 32,
      fontFamily: 'SpaceGrotesk-Bold'
    },

    openText: {
      color: themeColors.colors[scheme].green
    },

    closedText: {
      color: themeColors.colors[scheme].red
    }
  })

  const textStyles = StyleSheet.compose(styles.text, props.openStatus ? styles.openText : styles.closedText)

  return (
    <View>
      <Text style={textStyles}>{props.openStatus ? props.openStatusMessage : props.closedStatusMessage}</Text>
    </View>
  )
}

StatusView.propTypes = {
  openStatus: PropTypes.bool.isRequired,
  openStatusMessage: PropTypes.string,
  closedStatusMessage: PropTypes.string
}

StatusView.defaultProps = {
  openStatus: false,
  openStatusMessage: '[cloud] is open!',
  closedStatusMessage: '[cloud] is currently closed.'
}

export default StatusView
