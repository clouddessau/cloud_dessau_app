import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, useColorScheme} from 'react-native';

const LogoView = props => {
  const logoImage = require('../../../assets/images/cloud_logo.png');

  const scheme = useColorScheme();

  const tint = {
    dark: '#fff',
    light: '#000',
  };

  const styles = StyleSheet.create({
    image: {
      tintColor: tint[scheme],
      resizeMode: 'contain',
      width: props.width,
      height: props.height,
      maxWidth: props.maxWidth,
    },
  });

  return <Image style={styles.image} source={logoImage} />;
};

LogoView.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

LogoView.defaultProps = {
  width: '100%',
  height: '100%',
};

export default LogoView;
