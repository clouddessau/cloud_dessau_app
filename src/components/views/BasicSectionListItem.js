import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import themeProperties from '../../styles/themeProperties'
import themeColors from '../../styles/themeColors'

const BasicSectionListItem = (props) => {
  const scheme = useColorScheme()

  const numberOfItemsInSection = props.section.data.length - 1

  const styles = StyleSheet.create({
    item: {
      padding: themeProperties.container.padding,
      backgroundColor: themeColors.list.item[scheme].background,
      flexDirection: 'row',
      borderTopLeftRadius: props.index === 0 ? themeProperties.common.borderRadius : 0,
      borderTopRightRadius: props.index === 0 ? themeProperties.common.borderRadius : 0,
      borderBottomLeftRadius: props.index === numberOfItemsInSection ? themeProperties.common.borderRadius : 0,
      borderBottomRightRadius: props.index === numberOfItemsInSection ? themeProperties.common.borderRadius : 0,
    },

    title: {
      color: themeColors.colors[scheme].text,
      fontSize: themeProperties.list.fontSize,
      flex: 1
    },

    subtitle: {
      color: themeColors.colors[scheme].textSecondary,
      fontSize: themeProperties.list.fontSize
    }
  })

  return (
    <Pressable style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </Pressable>
  )
}

BasicSectionListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleColor: PropTypes.oneOf(['default', 'blue', 'red']),
  subtitleColor: PropTypes.oneOf(['default', 'red']),
  section: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

BasicSectionListItem.defaultProps = {
  subtitle: '',
  titleColor: 'default',
  subtitleColor: 'default'
}

export default BasicSectionListItem
