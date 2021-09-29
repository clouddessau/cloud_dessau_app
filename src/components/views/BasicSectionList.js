import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import BasicSectionListItem from './BasicSectionListItem';
import theme from '../../styles/theme';

const BasicSectionList = props => {
  const scheme = useColorScheme();
  const [renderSectionList, setRenderSectionList] = useState(false);

  const onItemSelected = id => {
    props.onItemSelected(id);
  };

  const styles = StyleSheet.create({
    list: {
      padding: theme.container.padding,
      paddingTop: 0,
    },

    header: {
      paddingHorizontal: theme.container.padding,
      paddingTop: theme.container.padding,
      paddingBottom: theme.container.padding / 2,
      color: theme.common.colors[scheme].textSecondary,
      fontSize: 16,
      fontWeight: '500',
      textTransform: 'uppercase',
    },

    listFooter: {
      marginTop: theme.container.padding / 2,
      marginHorizontal: theme.container.padding,
      color: theme.common.colors[scheme].textSecondary,
    },

    separatorContainer: {
      backgroundColor: theme.list.item[scheme].background,
    },

    separator: {
      marginLeft: theme.container.padding,
      height: 1,
      backgroundColor: theme.list.separator[scheme].background,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setRenderSectionList(true);
    }, 0);
  }, []);

  return (
    <>
      {renderSectionList && (
        <SectionList
          sections={props.sections}
          renderItem={({item, section, index}) =>
            item.customItem ? (
              item.customItem
            ) : (
              <BasicSectionListItem
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                onPress={id => onItemSelected(id)}
                subtitleColor={item.subtitleColor}
                leftIcon={item.leftIcon}
                rightIcon={item.rightIcon}
                iconColor={item.iconColor}
                numberOfLines={item.numberOfLines}
                section={section}
                index={index}
                selectable={item.selectable}
              />
            )
          }
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorContainer}>
              <View style={styles.separator} />
            </View>
          )}
          ListFooterComponent={() => (
            <Text style={styles.listFooter}>{props.listFooterText}</Text>
          )}
          stickySectionHeadersEnabled={props.stickyHeaders}
          style={styles.list}
        />
      )}
    </>
  );
};

BasicSectionList.propTypes = {
  sections: PropTypes.array.isRequired,
  stickyHeaders: PropTypes.bool,
};

BasicSectionList.defaultProps = {
  sections: [],
  stickyHeaders: false,
};

export default BasicSectionList;
