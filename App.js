import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as Bar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import { StackNavigator } from './App/Components/StackNavigator';
import { AppProvider } from './App/Globals/Appcontext';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : null
  },
});
