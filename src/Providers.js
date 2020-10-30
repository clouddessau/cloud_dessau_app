import React from 'react'
import { AuthProvider } from './AuthProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider } from 'react-native-appearance'
import Routes from './Routes'

const Providers = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <AppearanceProvider>
          <Routes />
        </AppearanceProvider>
      </SafeAreaProvider>
    </AuthProvider>
  )
}

export default Providers
