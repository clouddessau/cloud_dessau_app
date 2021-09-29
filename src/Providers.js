import React from 'react';
import {AuthProvider} from './AuthProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <ActionSheetProvider>
          <Routes />
        </ActionSheetProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
};

export default Providers;
