import React, {useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

import IndexScreen from './screens/IndexScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignInScreen from './screens/SignInScreen';
import AboutScreen from './screens/AboutScreen';

enableScreens();

const RootStack = createNativeStackNavigator();
const SignInStack = createNativeStackNavigator();

const SignInStackNavigator = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="SignInScreen" component={SignInScreen} />
    </SignInStack.Navigator>
  );
};

const Routes = () => {
  const scheme = useColorScheme();
  const [initializing, setInitializing] = useState(true);
  const {setUser} = useContext(AuthContext);

  const onAuthStateChanged = authUser => {
    setUser(authUser);

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Index"
          component={IndexScreen}
        />
        <RootStack.Screen
          options={{headerLargeTitle: true, headerBackTitle: 'Back'}}
          name="Settings"
          component={SettingsScreen}
        />
        <RootStack.Screen
          options={{headerShown: false, presentation: 'formSheet'}}
          name="SignIn"
          component={SignInStackNavigator}
        />
        <RootStack.Screen
          options={{headerLargeTitle: true}}
          name="About"
          component={AboutScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
