import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, Text, Image, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import themeProperties from '../../styles/themeProperties'
import themeColors from '../../styles/themeColors'
import icons from '../../styles/icons'

const BasicSectionListItem = (props) => {
  const scheme = useColorScheme()

  const numberOfItemsInSection = props.section.data.length - 1

  const onPress = (id) => {
    if (props.selectable) {
      props.onPress(id)
    }
  }

  const styles = StyleSheet.create({
    item: {
      padding: themeProperties.container.padding,
      backgroundColor: themeColors.list.item[scheme].background,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopLeftRadius: props.index === 0 ? themeProperties.common.borderRadius : 0,
      borderTopRightRadius: props.index === 0 ? themeProperties.common.borderRadius : 0,
      borderBottomLeftRadius: props.index === numberOfItemsInSection ? themeProperties.common.borderRadius : 0,
      borderBottomRightRadius: props.index === numberOfItemsInSection ? themeProperties.common.borderRadius : 0,
    },

    selectedItem: {
      backgroundColor: themeColors.list.item[scheme].backgroundSelected
    },

    title: {
      color: themeColors.colors[scheme].text,
      fontSize: themeProperties.list.fontSize,
      flex: 1
    },

    leftIconTitle: {
      marginLeft: 10
    },

    subtitle: {
      color: props.subtitleColor === "default" ? themeColors.colors[scheme].textSecondary : themeColors.colors[scheme][props.subtitleColor],
      fontSize: themeProperties.list.fontSize
    },

    icon: {
      width: themeProperties.list.iconSize,
      height: themeProperties.list.iconSize,
      tintColor: themeColors.colors[scheme][props.iconColor]
    }
  })

  const leftIconTitleStyles = StyleSheet.compose(styles.title, styles.leftIconTitle)
  const selectedItemStyles = StyleSheet.compose(styles.item, styles.selectedItem)

  return (
    <Pressable
      style={({ pressed }) => (
        pressed && props.selectable ? selectedItemStyles : styles.item
      )}
      onPress={() => onPress(props.id)}
    >
      {props.leftIcon &&
        <Image style={styles.icon} style={styles.icon} source={icons[props.leftIcon].src} />
      }
      <Text style={props.leftIcon ? leftIconTitleStyles : styles.title} numberOfLines={props.numberOfLines}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      {props.rightIcon &&
        <Image style={styles.icon} source={icons[props.rightIcon].src} />
      }
    </Pressable>
  )
}

BasicSectionListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleColor: PropTypes.oneOf(['default', 'blue', 'red']),
  subtitleColor: PropTypes.oneOf(['default', 'red']),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  iconColor: PropTypes.oneOf(['text', 'textSecondary', 'blue', 'red']),
  selectable: PropTypes.bool,
  section: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

BasicSectionListItem.defaultProps = {
  id: '',
  title: 'List Item',
  subtitle: '',
  titleColor: 'default',
  subtitleColor: 'default',
  iconColor: 'textSecondary',
  selectable: true
}

export default BasicSectionListItem
