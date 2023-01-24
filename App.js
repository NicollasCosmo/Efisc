import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login';
import Home from './pages/home';
import { KeyboardView } from './pages/login/style';


export default function App() {
  return (
    <>
         <Home />
        <KeyboardView />
        
      <StatusBar style="light" />

    
      
    </>
  );
}

//<Login />