import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native-appearance'
import controlColors from '../../styles/themeColors'

const ButtonControl = (props) => {
  const onPress = (e) => {
    props.onPress(e)
  }

  const { colors } = useTheme()
  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    container: {
      borderRadius: 10
    },

    button: {
      padding: 14,
      backgroundColor: controlColors.colors[scheme][props.color],
      borderRadius: 10,
      alignItems: 'center'
    },

    buttonText: {
      color: controlColors.buttonText[scheme][props.color],
      fontFamily: 'SpaceGrotesk-Medium',
      fontSize: 20
    }
  })

  return (
    <TouchableHighlight onPress={e => onPress(e)} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  )
}

ButtonControl.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['gray', 'blue', 'green', 'red', 'yellow'])
}

ButtonControl.defaultProps = {
  text: 'Button',
  color: 'gray'
}

export default ButtonControl
