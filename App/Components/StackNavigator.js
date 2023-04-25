import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { SignUp } from "../Screens/SignUp";
import { Login } from "../Screens/Login";
import { HomeScreen } from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}