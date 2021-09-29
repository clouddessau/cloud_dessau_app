import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import theme from '../../styles/theme';
import icons from '../../styles/icons';

const ToolbarButtonControl = props => {
  const onPress = e => {
    props.onPress(e);
  };

  const scheme = useColorScheme();

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    buttonText: {
      color: theme.common.colors[scheme][props.color],
      fontSize: 18,
    },

    icon: {
      width: props.iconSize ? props.iconSize : theme.icon.size,
      height: props.iconSize ? props.iconSize : theme.icon.size,
      tintColor: theme.common.colors[scheme][props.color],
    },

    spacer: {
      width: theme.container.padding / 2,
      height: theme.container.padding / 2,
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={e => onPress(e)}
      activeOpacity={0.5}>
      {props.icon && (
        <Image style={styles.icon} source={icons[props.icon].src} />
      )}
      {props.icon && props.text && <View style={styles.spacer} />}
      {props.text && <Text style={styles.buttonText}>{props.text}</Text>}
    </TouchableOpacity>
  );
};

ToolbarButtonControl.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf([
    'text',
    'textSecondary',
    'textTertiary',
    'blue',
    'green',
    'red',
    'yellow',
  ]),
  icon: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ToolbarButtonControl.defaultProps = {
  color: 'blue',
};

export default ToolbarButtonControl;
