import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import theme from '../../styles/theme'

const StatusView = (props) => {
  const scheme = useColorScheme()

  const openImage = require('../../../assets/images/status_open.png')
  const closedImage = require('../../../assets/images/status_closed.png')

  const styles = StyleSheet.create({
    container: {
      marginTop: theme.container.padding,
      padding: theme.container.padding * 1.5,
      backgroundColor: theme.common.colors[scheme].background,
      borderRadius: theme.common.borderRadius * 2,
      shadowColor: theme.common.colors.black,
      shadowOffset: theme.common.shadowOffsetLarge,
      shadowOpacity: theme.common.shadowOpacity,
      shadowRadius: theme.common.shadowRadiusLarge,
      elevation: theme.common.elevationLarge
    },

    image: {
      marginBottom: theme.container.padding * 1.5,
      width: '90%',
      height: 160,
      tintColor: theme.common.colors[scheme].text,
      resizeMode: 'contain',
      alignSelf: 'center'
    },

    textView: {
      paddingTop: theme.container.padding * 1.5,
      borderTopColor: theme.list.separator[scheme].background,
      borderTopWidth: 1
    },

    text: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center'
    },

    openText: {
      color: theme.common.colors[scheme].green
    },

    closedText: {
      color: theme.common.colors[scheme].red
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
