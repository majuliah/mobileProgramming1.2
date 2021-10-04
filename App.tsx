import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Signin } from './src/pages/Signin';
import { theme } from './src/global/styles/theme';

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
    </>
  );
}
