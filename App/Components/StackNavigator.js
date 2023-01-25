import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { SingUp } from "../Screens/SingUp";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={SingUp} />
        </Stack.Navigator>
    );
}