import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import OneSignal from 'react-native-onesignal'
import LockScreen from '../../features/lock/LockScreen'
import defaultScreenOptions from '../defaultScreenOptions'
import HotspotSetup from '../../features/hotspots/setup/HotspotSetupNavigator'
import MainTabs from './MainTabNavigator'
import SendNavigator from '../../features/wallet/send/SendNavigator'
import ScanNavigator from '../../features/wallet/scan/ScanNavigator'
import TransferNavigator from '../../features/hotspots/transfers/TransferNavigator'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  useEffect(() => {
    OneSignal.promptForPushNotificationsWithUserResponse(() => {})
  }, [])

  return (
    <HomeStack.Navigator
      mode="modal"
      screenOptions={({ route }) => {
        if (route.name === 'LockScreen')
          return { ...defaultScreenOptions, gestureEnabled: false }

        if (Platform.OS === 'android') return defaultScreenOptions
        return {}
      }}
    >
      <HomeStack.Screen
        name="MainTabs"
        options={{ headerShown: false }}
        component={MainTabs}
      />
      <HomeStack.Screen
        name="HotspotSetup"
        component={HotspotSetup}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <HomeStack.Screen
        name="Scan"
        component={ScanNavigator}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <HomeStack.Screen
        name="Send"
        component={SendNavigator}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <HomeStack.Screen
        name="Transfer"
        component={TransferNavigator}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <HomeStack.Screen
        name="LockScreen"
        component={LockScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
