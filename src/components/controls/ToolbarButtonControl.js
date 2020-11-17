import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import themeColors from '../../styles/themeColors'

const ToolbarButtonControl = (props) => {
  const onPress = (e) => {
    props.onPress(e)
  }

  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    buttonText: {
      color: themeColors.colors[scheme][props.color],
      fontSize: 18
    }
  })

  return (
    <TouchableOpacity style={styles.button} onPress={e => onPress(e)} activeOpacity={.5}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

ToolbarButtonControl.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['gray', 'blue', 'green', 'red', 'yellow'])
}

ToolbarButtonControl.defaultProps = {
  text: 'Button',
  color: 'blue'
}

export default ToolbarButtonControl
