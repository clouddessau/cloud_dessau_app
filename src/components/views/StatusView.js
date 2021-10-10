import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, StyleSheet, useColorScheme} from 'react-native';
import theme from '../../styles/theme';

const StatusView = props => {
  const scheme = useColorScheme();

  const openImage = require('../../../assets/images/status_open.png');
  const closedImage = require('../../../assets/images/status_closed.png');

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
      elevation: theme.common.elevationLarge,
    },

    image: {
      marginBottom: theme.container.padding * 1.5,
      width: '90%',
      height: 160,
      tintColor: theme.common.colors[scheme].text,
      resizeMode: 'contain',
      alignSelf: 'center',
    },

    textView: {
      paddingTop: theme.container.padding * 1.5,
      borderTopColor: theme.list.separator[scheme].background,
      borderTopWidth: 1,
    },

    text: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    openText: {
      color: theme.common.colors[scheme].green,
    },

    closedText: {
      color: theme.common.colors[scheme].red,
    },

    windDownText: {
      color: theme.common.colors[scheme].yellow,
    },
  });

  const textStyles = StyleSheet.compose(
    styles.text,
    props.openStatus
      ? props.windDownStatus
        ? styles.windDownText
        : styles.openText
      : styles.closedText,
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={props.openStatus ? openImage : closedImage}
      />
      <View style={styles.textView}>
        <Text style={textStyles}>
          {props.openStatus
            ? props.windDownStatus
              ? props.windDownStatusMessage
              : props.openStatusMessage
            : props.closedStatusMessage}
        </Text>
      </View>
    </View>
  );
};

StatusView.propTypes = {
  openStatus: PropTypes.bool.isRequired,
  windDownStatus: PropTypes.bool.isRequired,
  activityType: PropTypes.string,
  activityDetail: PropTypes.string,
  openStatusMessage: PropTypes.string,
  closedStatusMessage: PropTypes.string,
  windDownStatusMessage: PropTypes.string,
};

StatusView.defaultProps = {
  openStatus: false,
  windDownStatus: false,
  activityType: '',
  activityDetail: '',
  openStatusMessage: 'We’re open!',
  closedStatusMessage: 'We’re closed!',
  windDownStatusMessage: 'We’re closing soon!',
};

export default StatusView;
