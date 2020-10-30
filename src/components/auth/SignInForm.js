import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native-appearance'
import ButtonControl from '../controls/ButtonControl'
import controlColors from '../../styles/controlColors'

const SignInForm = (props) => {
  const onUsernameEdited = (text) => {
    props.onUsernameEdited(text)
  }

  const onPasswordEdited = (text) => {
    props.onPasswordEdited(text)
  }

  const onSubmit = () => {
    props.onSubmit()
  }

  const { colors } = useTheme()
  const scheme = useColorScheme()

  const passwordInput = useRef()

  const padding = 16
  const borderRadius = 10

  const styles = StyleSheet.create({
    usernameView: {
      padding: padding,
      borderColor: colors.border,
      borderWidth: 1,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      flexDirection: 'row'
    },

    passwordView: {
      marginBottom: 16,
      padding: padding,
      borderColor: colors.border,
      borderWidth: 1,
      borderTopWidth: 0,
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      flexDirection: 'row'
    },

    label: {
      flex: 1,
      paddingRight: 10,
      color: colors.text,
      fontWeight: '600'
    },

    input: {
      flex: 3,
      color: colors.text
    },

    submitButton: {
      marginTop: 16
    }
  })

  return (
    <View>
      <View style={styles.usernameView}>
        <Text style={styles.label}>{props.usernameLabel}</Text>
        <TextInput
          onChangeText={text => onUsernameEdited(text)}
          value={props.usernameValue}
          placeholder={props.usernamePlaceholder}
          textContentType={props.usernameIsEmail ? "emailAddress" : "username"}
          autoCompleteType={props.usernameIsEmail ? "email" : "username"}
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
      <ButtonControl onPress={() => onSubmit()} text="Sign in" color="blue" />
    </View>
  )
}

SignInForm.propTypes = {
  usernameLabel: PropTypes.string,
  passwordLabel: PropTypes.string,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  usernamePlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
  usernameIsEmail: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.oneOf(['default', 'blue', 'red'])
}

SignInForm.defaultProps = {
  usernameLabel: 'Username',
  passwordLabel: 'Password',
  usernameValue: '',
  passwordValue: '',
  usernamePlaceholder: 'Required',
  passwordPlaceholder: 'Required',
  usernameIsEmail: false,
  buttonText: 'Sign In',
  buttonColor: 'blue'
}

export default SignInForm
