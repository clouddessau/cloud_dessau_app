import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionList, Text, View, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import BasicSectionListItem from './BasicSectionListItem'
import themeProperties from '../../styles/themeProperties'
import themeColors from '../../styles/themeColors'

const BasicSectionList = (props) => {
  const scheme = useColorScheme()
  const [renderSectionList, setRenderSectionList] = useState(false)

  const onItemSelected = (id) => {
    props.onItemSelected(id)
  }

  const styles = StyleSheet.create({
    list: {
      padding: themeProperties.container.padding
    },

    header: {
      paddingHorizontal: themeProperties.container.padding,
      paddingBottom: 8,
      color: themeColors.colors[scheme].textSecondary,
      fontSize: 16,
      fontWeight: '500',
      textTransform: 'uppercase',
    },

    separatorContainer: {
      backgroundColor: themeColors.list.item[scheme].background
    },
    
    separator: {
      marginLeft: themeProperties.container.padding,
      height: 1,
      backgroundColor: themeColors.list.separator[scheme].background
    }
  })

  useEffect(() => {
    setTimeout(() => {
      setRenderSectionList(true)
    }, 0)
  }, [])

  return (
    <>
    {renderSectionList &&
      <SectionList
        sections={props.sections}
        renderItem={({ item, section, index }) => (
          <BasicSectionListItem key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} onPress={id => onItemSelected(id)} subtitleColor={item.subtitleColor} section={section} index={index} selectable={item.selectable} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
          </View>
        )}
        stickySectionHeadersEnabled={props.stickyHeaders}
        style={styles.list}
      />
    }
    </>
  )
}

BasicSectionList.propTypes = {
  sections: PropTypes.array.isRequired,
  stickyHeaders: PropTypes.bool
}

BasicSectionList.defaultProps = {
  sections: [],
  stickyHeaders: false
}

export default BasicSectionList
