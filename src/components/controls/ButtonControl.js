import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import theme from '../../styles/theme';
import icons from '../../styles/icons';

const ButtonControl = props => {
  const onPress = e => {
    if (!props.disabled) {
      props.onPress(e);
    }
  };

  const scheme = useColorScheme();

  const styles = StyleSheet.create({
    button: {
      padding: theme.button.view.padding,
      backgroundColor: theme.button.view[scheme][props.backgroundColor],
      borderRadius: props.rounded
        ? theme.button.view.padding * 2 + props.iconSize
        : 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonShadow: {
      shadowColor: theme.common.colors.black,
      shadowOffset: theme.common.shadowOffset,
      shadowOpacity: theme.common.shadowOpacity,
      shadowRadius: theme.common.shadowRadius,
      elevation: theme.common.elevation,
    },

    buttonPressed: {
      backgroundColor: theme.button.view.pressed[scheme][props.backgroundColor],
    },

    buttonText: {
      color: theme.button.text[scheme][props.textColor],
      fontSize: props.textSize ? props.textSize : theme.button.text.size,
      fontWeight: '500',
    },

    icon: {
      width: props.iconSize ? props.iconSize : theme.icon.size,
      height: props.iconSize ? props.iconSize : theme.icon.size,
      tintColor: theme.common.colors[scheme][props.iconColor],
    },

    spacer: {
      width: theme.container.padding / 2,
      height: theme.container.padding / 2,
    },

    disabledButton: {
      backgroundColor: theme.button.view[scheme].disabled,
    },

    disabledButtonText: {
      color: theme.button.text[scheme].disabled,
    },
  });

  var buttonStyles = props.disabled
    ? StyleSheet.compose(styles.button, styles.disabledButton)
    : styles.button;
  buttonStyles = props.shadow
    ? StyleSheet.compose(buttonStyles, styles.buttonShadow)
    : buttonStyles;
  const pressedButtonStyles = StyleSheet.compose(
    buttonStyles,
    styles.buttonPressed,
  );

  const buttonTextStyles = props.disabled
    ? StyleSheet.compose(styles.buttonText, styles.disabledButtonText)
    : styles.buttonText;

  return (
    <Pressable
      onPress={e => onPress(e)}
      style={({pressed}) => (pressed ? pressedButtonStyles : buttonStyles)}
      disabled={props.disabled}>
      {({pressed}) => (
        <>
          {props.icon && (
            <Image style={styles.icon} source={icons[props.icon].src} />
          )}
          {props.icon && props.text && <View style={styles.spacer} />}
          <Text style={buttonTextStyles}>{props.text}</Text>
        </>
      )}
    </Pressable>
  );
};

ButtonControl.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    'default',
    'red',
    'yellow',
    'green',
    'blue',
    'none',
  ]),
  textColor: PropTypes.oneOf([
    'text',
    'textSecondary',
    'black',
    'white',
    'red',
    'yellow',
    'green',
    'blue',
  ]),
  textSize: PropTypes.number,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  disabled: PropTypes.bool,
};

ButtonControl.defaultProps = {
  backgroundColor: 'default',
  textColor: 'text',
  iconColor: 'black',
  iconSize: theme.icon.size,
  rounded: false,
  shadow: false,
  disabled: false,
};

export default ButtonControl;
