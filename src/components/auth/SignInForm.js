import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet, useColorScheme} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ButtonControl from '../controls/ButtonControl';
import theme from '../../styles/theme';

const SignInForm = props => {
  const onUsernameEdited = text => {
    props.onUsernameEdited(text);
  };

  const onPasswordEdited = text => {
    props.onPasswordEdited(text);
  };

  const onSubmit = () => {
    props.onSubmit();
  };

  const scheme = useColorScheme();
  const {colors} = useTheme();

  const passwordInput = useRef();

  const viewPadding = theme.form.padding;
  const viewMargin = viewPadding;
  const fontSize = theme.form.fontSize;
  const viewBorderRadius = theme.common.borderRadius;

  const styles = StyleSheet.create({
    usernameView: {
      padding: viewPadding,
      backgroundColor: theme.common.colors[scheme].background,
      borderColor: colors.border,
      borderWidth: 1,
      borderTopLeftRadius: viewBorderRadius,
      borderTopRightRadius: viewBorderRadius,
      flexDirection: 'row',
    },

    passwordView: {
      marginBottom: viewMargin,
      padding: viewPadding,
      backgroundColor: theme.common.colors[scheme].background,
      borderColor: colors.border,
      borderWidth: 1,
      borderTopWidth: 0,
      borderBottomLeftRadius: viewBorderRadius,
      borderBottomRightRadius: viewBorderRadius,
      flexDirection: 'row',
    },

    label: {
      paddingRight: viewPadding / 2,
      color: colors.text,
      fontSize: fontSize,
      fontWeight: '500',
      flex: 1.5,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    input: {
      padding: 0,
      color: colors.text,
      fontSize: fontSize,
      flex: 3,
    },
  });

  return (
    <View>
      <View style={styles.usernameView}>
        <Text style={styles.label}>{props.usernameLabel}</Text>
        <TextInput
          onChangeText={text => onUsernameEdited(text)}
          value={props.usernameValue}
          placeholder={props.usernamePlaceholder}
          textContentType="username"
          autoCompleteType={props.usernameIsEmail ? 'email' : 'username'}
          autoCapitalize="none"
          autoFocus={true}
          clearButtonMode="while-editing"
          onSubmitEditing={() => passwordInput.current.focus()}
          style={styles.input}
        />
      </View>
      <View style={styles.passwordView}>
        <Text style={styles.label}>{props.passwordLabel}</Text>
        <TextInput
          ref={passwordInput}
          onChangeText={text => onPasswordEdited(text)}
          value={props.passwordValue}
          placeholder={props.passwordPlaceholder}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          onSubmitEditing={() => onSubmit()}
          style={styles.input}
        />
      </View>
      <ButtonControl
        onPress={() => onSubmit()}
        text="Sign in"
        textColor="white"
        backgroundColor="blue"
        disabled={
          props.usernameValue.length === 0 || props.passwordValue.length === 0
        }
      />
    </View>
  );
};

SignInForm.propTypes = {
  usernameLabel: PropTypes.string,
  passwordLabel: PropTypes.string,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  usernamePlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  usernameIsEmail: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.oneOf(['default', 'blue', 'red']),
};

SignInForm.defaultProps = {
  usernameLabel: 'Username',
  passwordLabel: 'Password',
  usernameValue: '',
  passwordValue: '',
  usernamePlaceholder: 'Required',
  passwordPlaceholder: 'Required',
  usernameIsEmail: false,
  buttonText: 'Sign In',
  buttonColor: 'blue',
};

export default SignInForm;
