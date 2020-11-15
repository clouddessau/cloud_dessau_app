import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import themeColors from '../../styles/themeColors'
import themeProperties from '../../styles/themeProperties'

const StatusView = (props) => {
  const scheme = useColorScheme()

  const openImage = require('../../../assets/images/status_open.png')
  const closedImage = require('../../../assets/images/status_closed.png')

  const styles = StyleSheet.create({
    container: {
      marginTop: themeProperties.container.padding,
      padding: themeProperties.container.padding * 2,
      backgroundColor: themeColors.colors[scheme].background,
      borderRadius: themeProperties.common.borderRadius * 2,
      shadowColor: themeColors.colors.black,
      shadowOffset: themeProperties.common.shadowOffset,
      shadowOpacity: themeProperties.common.shadowOpacity,
      shadowRadius: themeProperties.common.shadowRadiusLarge,
      elevation: 10
    },

    image: {
      marginBottom: themeProperties.container.padding * 2,
      width: '80%',
      height: 220,
      tintColor: themeColors.colors[scheme].text,
      resizeMode: 'contain',
      alignSelf: 'center'
    },

    textView: {
      paddingTop: themeProperties.container.padding * 2,
      borderTopColor: themeColors.list.separator[scheme].background,
      borderTopWidth: 1
    },

    text: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center'
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
    <View style={styles.container}>
      <Image style={styles.image} source={props.openStatus ? openImage : closedImage} />
      <View style={styles.textView}>
        <Text style={textStyles}>{props.openStatus ? props.openStatusMessage : props.closedStatusMessage}</Text>
      </View>
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
  openStatusMessage: 'We’re open!',
  closedStatusMessage: 'We’re closed!'
}

export default StatusView
