import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { SignIn } from './src/pages/SignIn'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <SignIn />
    </ThemeProvider>
  );
}