import React, { useContext, useEffect, useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Theme } from '../Services/Theme';

export function HomeScreen({ navigation }) {

    // const formater = Intl.NumberFormat('en-US', {
    //     compactDisplay: 'long',
    //     minimumFractionDigits: 2
    // })



    const now = new Date();
    let hr = now.getHours();
    let greeting = 'Morning';
    if (hr >= 12 & hr <= 15) {
        greeting = "Afternoon"
    }
    else if (hr >= 16) {
        greeting = "Evening"
    }


    // function deleteTac(tid) {
    //     let newHistory = userInfo.history.filter(t => t.id !== tid)
    //     updateDoc(doc(db, "users", userUID), {
    //         history: newHistory
    //     })
    //         .catch(() => {
    //             alert('Error', 'An unknown error occured while saving this post')
    //         })
    // }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search Note"
                    style={{ marginVertical: 7, borderRadius: 50, }}
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.greetingText}>Good Morning</Text>
                </View>
                <TouchableOpacity style={styles.singleNote}>
                    <Text style={styles.title}>Welcom to HomeScreen</Text>
                    <View style={styles.body}>
                        <Text style={styles.content}>This is the home screen of this app. This is where the user see all the note he/she has been posting</Text>
                        <Text style={styles.date}>Date: 12/4/2023 11:23 am</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0000000f',
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    greetingText: {
        fontSize: 20,
        fontWeight: '500',
        color: Theme.colors.maroon700,
    },
    singleNote: {
        backgroundColor: "white",
        padding:10,
        borderRadius:10
    }

})