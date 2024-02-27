import { MainProvider } from './src/context/MainContext';
import { Main } from './src/components/Main';
import { StatusBar } from 'react-native';

import Toast from 'react-native-toast-message';
import React from 'react';

export default function App() {
  return (
    <>
      <MainProvider>
        <StatusBar />
        <Main />
      </MainProvider>
      <Toast />
    </>
  );
}
