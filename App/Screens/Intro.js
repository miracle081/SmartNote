import react, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet, Image, } from "react-native";
import { AppButton } from "../Components/AppButton";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Quicksand_500Medium } from "@expo-google-fonts/quicksand";
import { Theme } from "../Services/theme";

export function Intro({ navigation }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ Pacifico_400Regular, Quicksand_500Medium });
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginBottom: 20, }}>
                <Image source={require("../../assets/logo.png")} style={styles.logo} />
                <Text style={styles.brandName}>Smart Note</Text>
            </View>
            <Image source={require("../../assets/notebook.jpg")} style={styles.introImg} />
            <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 17, margin: 10 }}>
                Notes is the best place to jot down quick thoughts or to save longer notes filled with checklists, images, web links, scanned documents, handwritten notes, or sketches.
            </Text>
            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                <AppButton>Get Started</AppButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    introImg: {
        width: '100%',
        height: 250,
    },
    brandName: {
        fontFamily: "Pacifico_400Regular",
        fontSize: 25,
        color: Theme.colors.maroon900
    },
    logo:{
        width:60,
        height:60,
        borderRadius:20
    }
})