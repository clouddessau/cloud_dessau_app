import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import themeProperties from '../../styles/themeProperties'
import themeColors from '../../styles/themeColors'
import icons from '../../styles/icons'

const ToolbarButtonControl = (props) => {

  const onPress = (e) => {
    props.onPress(e)
  }

  const scheme = useColorScheme()

  const styles = StyleSheet.create({
    buttonText: {
      color: themeColors.colors[scheme][props.color],
      fontSize: 18
    },

    icon: {
      width: props.iconSize ? props.iconSize : themeProperties.icon.size,
      height: props.iconSize ? props.iconSize : themeProperties.icon.size,
      tintColor: themeColors.colors[scheme][props.color]
    }
  })

  return (
    <TouchableOpacity style={styles.button} onPress={e => onPress(e)} activeOpacity={.5}>
      {props.text &&
        <Text style={styles.buttonText}>{props.text}</Text>
      }
      {props.icon &&
        <Image style={styles.icon} source={icons[props.icon].src} />
      }
    </TouchableOpacity>
  )
}

ToolbarButtonControl.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['text', 'textSecondary', 'textTertiary', 'blue', 'green', 'red', 'yellow']),
  icon: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

ToolbarButtonControl.defaultProps = {
  color: 'text'
}

export default ToolbarButtonControl
