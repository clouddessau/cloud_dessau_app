import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionList, Text, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import BasicSectionListItem from './BasicSectionListItem'
import themeProperties from '../../styles/themeProperties'
import themeColors from '../../styles/themeColors'

const BasicSectionList = (props) => {
  const scheme = useColorScheme()
  const [renderSectionList, setRenderSectionList] = useState(false)

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
          <BasicSectionListItem key={item.key} title={item.title} subtitle={item.subtitle} subtitleColor={item.subtitleColor} section={section} index={index} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
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
