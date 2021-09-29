import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../styles/theme';

const BaseView = props => {
  const scheme = useColorScheme();

  const styles = StyleSheet.create({
    view: {
      padding: theme.container.padding,
      backgroundColor: theme.common.colors[scheme][props.background],
      flex: 1,
    },
  });

  return <SafeAreaView style={styles.view}>{props.children}</SafeAreaView>;
};

BaseView.propTypes = {
  background: PropTypes.oneOf([
    'background',
    'backgroundGrouped',
    'backgroundSecondary',
  ]),
};

BaseView.defaultProps = {
  background: 'background',
};

export default BaseView;
