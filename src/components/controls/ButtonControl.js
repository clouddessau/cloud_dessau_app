import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import theme from '../../styles/theme'

const ButtonControl = (props) => {
  const onPress = (e) => {
    if (!props.disabled) {
      props.onPress(e)
    }
  }

  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    button: {
      padding: 14,
      backgroundColor: theme.common.colors[scheme][props.color],
      borderRadius: 10,
      alignItems: 'center'
    },

    buttonPressed: {
      backgroundColor: theme.common.colors.active[scheme][props.color]
    },

    buttonText: {
      color: theme.button.text[scheme][props.color],
      fontSize: 20,
      fontWeight: '500'
    },

    disabledButton: {
      backgroundColor: theme.button.view[scheme].disabled
    },

    disabledButtonText: {
      color: theme.button.text[scheme].disabled
    }
  })

  const buttonStyles = props.disabled ? StyleSheet.compose(styles.button, styles.disabledButton) : styles.button
  const pressedButtonStyles = StyleSheet.compose(styles.button, styles.buttonPressed)

  const buttonTextStyles = props.disabled ? StyleSheet.compose(styles.buttonText, styles.disabledButtonText) : styles.buttonText

  return (
    <Pressable
      onPress={e => onPress(e)}
      style={({ pressed }) => (
        pressed ? pressedButtonStyles : buttonStyles
      )}
      disabled={props.disabled}
    >
      {({ pressed }) => (
        <Text style={buttonTextStyles}>{props.text}</Text>
      )}
    </Pressable>
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
