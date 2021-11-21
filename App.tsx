import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Rajdhani_300Light, Rajdhani_400Regular, Rajdhani_500Medium, Rajdhani_600SemiBold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { Signin } from './src/pages/Signin';
import { theme } from './src/global/styles/theme';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';



export default function App() {
  const [fontsLoaded] = useFonts({Rajdhani_600SemiBold, Rajdhani_500Medium, Rajdhani_400Regular, Rajdhani_300Light})
  if(!fontsLoaded){
    return<AppLoading/>
  }
  
  return (
    <Background>
    <StatusBar barStyle='light-content' background-color='transparent' translucent={true}/>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    </Background>
  );
}
