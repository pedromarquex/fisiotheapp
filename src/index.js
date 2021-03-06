import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Routes />
    </>
  );
}
