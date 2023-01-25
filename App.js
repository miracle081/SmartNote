import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as Bar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import { StackNavigator } from './App/Components/StackNavigator';
import { Intro } from './App/Screens/Intro';
import { Components } from './components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Bar style='auto' /> */}
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </SafeAreaView>
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
