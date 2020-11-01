import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native-appearance'
import themeColors from '../../styles/themeColors'

const ButtonControl = (props) => {
  const onPress = (e) => {
    if (!props.disabled) {
      props.onPress(e)
    }
  }

  const { colors } = useTheme()
  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    container: {
      borderRadius: 10
    },

    button: {
      padding: 14,
      backgroundColor: themeColors.colors[scheme][props.color],
      borderRadius: 10,
      alignItems: 'center'
    },

    buttonText: {
      color: themeColors.buttonText[scheme][props.color],
      fontFamily: 'SpaceGrotesk-Medium',
      fontSize: 20
    },

    disabledButton: {
      backgroundColor: themeColors.button[scheme].disabled
    },

    disabledButtonText: {
      color: themeColors.buttonText[scheme].disabled
    }
  })

  const disabledButtonStyles = StyleSheet.compose(styles.button, styles.disabledButton)
  const disabledButtonTextStyles = StyleSheet.compose(styles.buttonText, styles.disabledButtonText)

  return (
    <TouchableHighlight onPress={e => onPress(e)} style={styles.container} activeOpacity={props.disabled ? 1 : .85} underlayColor="#000">
      <View style={props.disabled ? disabledButtonStyles : styles.button}>
        <Text style={props.disabled ? disabledButtonTextStyles : styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  )
}

ButtonControl.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['gray', 'blue', 'green', 'red', 'yellow']),
  disabled: PropTypes.bool
}

ButtonControl.defaultProps = {
  text: 'Button',
  color: 'gray',
  disabled: false
}

export default ButtonControl
