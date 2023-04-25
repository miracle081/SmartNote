import { useState, useContext, useEffect } from 'react';
import { ActivityIndicator, Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Button, TextInput, } from 'react-native-paper';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { authentication } from '../Services/Firebase';
import { AppContext } from '../Globals/Appcontext';
import { AppButton } from '../Components/AppButton';
export function Login({ navigation, route }) {

    const { setPreloader, setUserUID } = useContext(AppContext);
    const [word, setWord] = useState(true);
    const [icon, setIcon] = useState("eye");

    function LoginAuth(email, password) {
        setPreloader(true)
        signInWithEmailAndPassword(authentication, email, password)
            .then(() => {
                // const user = userCredential.user;
                onAuthStateChanged(authentication, (userInfo) => {
                    setUserUID(userInfo.uid);
                    navigation.navigate('HomeScreen');
                    setPreloader(false)
                })
            }) 
            .catch((error) => {
                let msg = error.code.split("/").pop()
                msg = msg.split("-").join(" ")
                setPreloader(false)
                Alert.alert('Log in', msg, [{ text: 'Try again' }])
            })
    }


    return (
        <ImageBackground source={require('../../assets/15.jpg')} style={styles.container}>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email("Invalid Email!").
                        required("Field Cannot be Empty"),
                    password: Yup.
                        string("Must be a string value!").
                        min(8, "Password is too short!").
                        max(14, "Password is too long").
                        required("Filed cannot be empty")
                })}
                onSubmit={(values, action) => {
                    LoginAuth(values.email, values.password);
                    action.resetForm();
                }}

            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.overlay}>
                        <Text style={styles.header}>Sign In</Text>
                        <TextInput
                            label="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            underlineColor="none"
                            activeUnderlineColor='none'
                            keyboardType='email-address'
                            style={styles.input}
                            autoCapitalize="none"
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                        <TextInput
                            underlineColor="none"
                            activeUnderlineColor='none'
                            label="Passsord"
                            secureTextEntry={word}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            style={styles.input}
                            right={<TextInput.Icon onPress={() => { setWord(!word) }} icon={icon} />}
                        />
                        {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                        <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
                            <Text style={styles.last}>Forgotten Passsord</Text>
                        </TouchableOpacity>

                        <AppButton onPress={handleSubmit} style={{ width: 200 }}>Log In</AppButton>

                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} >
                            <Text style={styles.last}>Don't have an accout, create one</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    overlay: {
        padding: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    input: {
        width: '100%',
        borderRadius: 50,
        marginTop: 20,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomColor: 'green',
        borderBottomWidth: 2,
        backgroundColor: 'transpirent',
        backgroundColor: "rgba(255, 255, 255, 0.612)",
        color: 'white',
        fontSize: 17,
    },
    header: {
        color: "white",
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20
    },
    last: {
        marginVertical: 10,
        color: "white",
        fontWeight: 'bold',
        fontSize: 17,
    },
});
