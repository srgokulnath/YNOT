import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-rn'
import StackNavigator from './StackNavigator';
import { NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}


