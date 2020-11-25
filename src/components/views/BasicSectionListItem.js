import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, Text, Image, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import theme from '../../styles/theme'
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
      padding: theme.container.padding,
      backgroundColor: theme.list.item[scheme].background,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopLeftRadius: props.index === 0 ? theme.common.borderRadius : 0,
      borderTopRightRadius: props.index === 0 ? theme.common.borderRadius : 0,
      borderBottomLeftRadius: props.index === numberOfItemsInSection ? theme.common.borderRadius : 0,
      borderBottomRightRadius: props.index === numberOfItemsInSection ? theme.common.borderRadius : 0,
    },

    selectedItem: {
      backgroundColor: theme.list.item[scheme].backgroundSelected
    },

    title: {
      color: theme.common.colors[scheme].text,
      fontSize: theme.list.item.fontSize,
      flex: 1
    },

    leftIconTitle: {
      marginLeft: 10
    },

    subtitle: {
      color: props.subtitleColor === "default" ? theme.common.colors[scheme].textSecondary : theme.common.colors[scheme][props.subtitleColor],
      fontSize: theme.list.item.fontSize
    },

    icon: {
      width: theme.list.item.iconSize,
      height: theme.list.item.iconSize,
      tintColor: theme.common.colors[scheme][props.iconColor]
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
