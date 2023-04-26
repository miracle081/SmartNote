import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Intro } from "../Screens/Intro";
import { SignUp } from "../Screens/SignUp";
import { Login } from "../Screens/Login";
import { HomeScreen } from "../Screens/HomeScreen";
import { Note } from "../Screens/Note";
import { AddNote } from "../Screens/AddNote";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="AddNote" component={AddNote} options={{ headerShown: true, title:"Post Note"}} />
        </Stack.Navigator>
    );
}