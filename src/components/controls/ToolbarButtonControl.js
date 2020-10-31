import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import controlColors from '../../styles/controlColors'

const ToolbarButtonControl = (props) => {
  const onPress = (e) => {
    props.onPress(e)
  }

  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    buttonText: {
      color: controlColors.button[scheme][props.color],
      fontFamily: 'SpaceGrotesk-Regular',
      fontSize: 18
    }
  })

  return (
    <TouchableOpacity style={styles.button} onPress={e => onPress(e)}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

ToolbarButtonControl.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'blue', 'red'])
}

ToolbarButtonControl.defaultProps = {
  text: 'Button',
  color: 'blue'
}

export default ToolbarButtonControl
