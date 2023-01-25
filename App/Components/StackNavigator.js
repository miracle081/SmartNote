import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { SignUp } from "../Screens/SignUp";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}