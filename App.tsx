import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LogBox } from 'react-native'

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

import Routes from './src/routes'
import Background from './src/components/Background'
import { AuthProvider } from './src/hooks/auth'

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded)
    return <AppLoading />


  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <Background>
        <AuthProvider>
          <Routes /> 
        </AuthProvider>
      </Background>
    </ThemeProvider>
  )
}