import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import styleProperties from '../../styles/styleProperties'

const StatusView = (props) => {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: 32,
      fontWeight: '600'
    }
  })

  return (
    <View>
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
  openStatusMessage: '[cloud] is open!',
  closedStatusMessage: '[cloud] is currently closed.'
}

export default StatusView
