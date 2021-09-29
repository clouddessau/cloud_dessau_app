import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const TextInputControl = props => {
  const onTextChanged = text => {
    props.onTextChanged(text);
  };

  const {colors} = useTheme();

  const styles = StyleSheet.create({
    input: {
      padding: 10,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 6,
    },
  });

  return (
    <TextInput
      {...props}
      onChangeText={text => onTextChanged(text)}
      style={styles.input}
    />
  );
};

TextInputControl.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoComplete: PropTypes.oneOf([
    'off',
    'username',
    'password',
    'email',
    'name',
    'tel',
    'street-address',
    'postal-code',
    'cc-number',
    'cc-csc',
    'cc-exp',
    'cc-exp-month',
    'cc-exp-year',
  ]),
  autoCapitalize: PropTypes.oneOf(['characters', 'words', 'sentences', 'none']),
};

TextInputControl.defaultProps = {
  value: '',
  placeholder: '',
  secureTextEntry: false,
  autoComplete: 'off',
  autoCapitalize: 'none',
};

export default TextInputControl;
