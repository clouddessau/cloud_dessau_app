import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native-appearance'
import themeColors from '../../styles/themeColors'
import themeProperties from '../../styles/themeProperties'

const StatusView = (props) => {
  const scheme = useColorScheme()
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    view: {
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: themeProperties.common.borderRadius,
      alignSelf: 'flex-start'
    },

    text: {
      color: themeColors.colors.white,
      fontSize: 32,
      fontWeight: '600'
    },

    open: {
      backgroundColor: themeColors.colors[scheme].green
    },

    closed: {
      backgroundColor: themeColors.colors[scheme].red
    }
  })

  const viewStyles = StyleSheet.compose(styles.view, props.openStatus ? styles.open : styles.closed)

  return (
    <View style={viewStyles}>
      <Text style={styles.text}>{props.openStatus ? props.openStatusMessage : props.closedStatusMessage}</Text>
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
  openStatusMessage: 'Open',
  closedStatusMessage: 'Closed'
}

export default StatusView
