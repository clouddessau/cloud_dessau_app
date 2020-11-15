import React from 'react'
import { AuthProvider } from './AuthProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider } from 'react-native-appearance'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import Routes from './Routes'

const Providers = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <AppearanceProvider>
          <ActionSheetProvider>
            <Routes />
          </ActionSheetProvider>
        </AppearanceProvider>
      </SafeAreaProvider>
    </AuthProvider>
  )
}

export default Providers
