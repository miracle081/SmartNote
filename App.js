import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as Bar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import { StackNavigator } from './App/Components/StackNavigator';
import { AppProvider } from './App/Globals/Appcontext';
import { Intro } from './App/Screens/Intro';
import { Components } from './components';


// npm install --legacy-peer-deps

export default function App() {
  return (
      <AppProvider>
        {/* <Bar style='auto' /> */}
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : null
  },
});
