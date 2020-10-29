import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';

const TextInputStyles = () => {
  const { colors } = useTheme()

  return styles(colors)
}

const styles = (colors) => StyleSheet.create({
  input: {
    padding: 8,
    color: colors.text,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4
  },

  focusedInput: {
    borderColor: 'blue'
  }
})

export default TextInputStyles
