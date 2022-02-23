import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View, LogBox } from 'react-native';
LogBox.ignoreAllLogs();
import tw from 'tailwind-rn'
import StackNavigator from './StackNavigator';
import { NavigationContainer} from '@react-navigation/native'
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
  );
}


