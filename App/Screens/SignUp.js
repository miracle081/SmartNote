import { useState, useContext, useEffect } from 'react';
import { Alert, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Button, TextInput, } from 'react-native-paper';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, } from 'firebase/firestore';
import { AppContext } from '../Globals/Appcontext';
import { authentication, db } from '../Services/Firebase';
import { AppButton } from '../Components/AppButton';

export function SignUp({ navigation }) {
    const { setUserUID, setPreloader } = useContext(AppContext);

    const [userName, setUserName] = useState("");
    const [fName, setFname] = useState("");
    const [lName, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [word, setWord] = useState(true);
    const [icon, setIcon] = useState("eye");

    function createAccount() {
        setPreloader(true)
        createUserWithEmailAndPassword(authentication, email, password)
            .then(() => onAuthStateChanged(authentication, (user) => {
                const userUID = user.uid;
                setDoc(doc(db, 'users', userUID), {
                    uid: userUID,
                    userName: userName,
                    fName: fName,
                    lName: lName,
                    phoneNumber: phone,
                    email: email,
                    balance: 0.00,
                })
                    .then(() => {
                        setUserUID(userUID)
                        navigation.navigate('HomeScreen');
                        setPreloader(false)
                    })
                    .catch(() => Alert.alert(
                        'Status',
                        'Failed while interracting with database',
                        [{ text: 'Ok', onPress: navigation.navigate('SignUp') }]
                    ))
            }))
            .catch((error) => Alert.alert(
                'Status',
                `${error}`,
                [{ text: 'Ok', onPress: navigation.navigate('SignUp') }]
            ))
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.overlay}>
                    <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: "padding" } : {})}
                        style={{
                            width: "100%"
                        }}
                    >
                        <Text style={styles.header}>Create An Account</Text>
                        <TextInput
                            label="User Name"
                            onChangeText={text => setUserName(text)}
                            underlineColor="none"
                            activeUnderlineColor='none'
                            style={styles.input}
                        />
                        <TextInput
                            label="First Name"
                            onChangeText={text => setFname(text)}
                            underlineColor="none"
                            activeUnderlineColor='none'
                            style={styles.input}
                        />
                        <TextInput
                            label="Last Name"
                            onChangeText={text => setLName(text)}
                            underlineColor="none"
                            activeUnderlineColor='none'
                            style={styles.input}
                        />
                        <TextInput
                            label="Phone number"
                            onChangeText={text => setPhone(text)}
                            underlineColor="none"
                            activeUnderlineColor='none'
                            style={styles.input}
                            keyboardType='phone-pad'
                        />
                        <TextInput
                            label="Email"
                            onChangeText={text => setEmail(text)}
                            underlineColor="none"
                            activeUnderlineColor='none'
                            style={styles.input}
                            keyboardType='email-address'
                            autoComplete='email'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <TextInput
                            underlineColor="none"
                            activeUnderlineColor='none'
                            label="Passsord"
                            secureTextEntry={word}
                            onChangeText={text => setPassword(text)}
                            style={styles.input}
                            right={<TextInput.Icon onPress={() => {
                                if (word === true) {
                                    setWord(false)
                                    setIcon("eye-off")
                                }
                                else {
                                    setWord(true)
                                    setIcon("eye")
                                }
                            }} icon={icon} />}
                        />
                        <View style={{alignItems:'center'}}>
                            <AppButton onPress={createAccount} style={{ width: 300 }}>Sign Up</AppButton>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
                            <Text style={styles.last}>Already have an accout, Log in</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    input: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: "rgba(255, 255, 255, 0.612)",
        color: 'white',
        fontSize: 17,
    },
    header: {
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center"
    },
    last: {
        marginVertical: 10,
        color: "white",
        fontWeight: 'bold',
        fontSize: 17,
    }
});
