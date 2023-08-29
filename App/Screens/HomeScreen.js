import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceSmile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Globals/Firebase';
import { Theme } from '../Globals/theme';

export function HomeScreen({ navigation }) {
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "notes"), (snapShot) => {
            const all = []
            snapShot.forEach(e => {
                const retun = e.data()
                all.push({ ...retun, docId: e.id })
            })
            setAllNotes(all)
        })
    }, [])

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


    function deleteNote(Id) {
        Alert.alert(
            "Delete Note!",
            "Are you sure you want to delete this note?",
            [{ text: "No" }, {
                text: "Yes", onPress: () => {
                    deleteDoc(doc(db, "notes", Id))
                        .catch(() => {
                            Alert.alert('Error', 'An unknown error occured while deleting this post')
                        })
                }
            }]
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search Note"
                    style={{ marginVertical: 7, borderRadius: 50, }}
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.greetingText}>Good {greeting}</Text>
                </View>
                <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("AddNote")}>
                    <FontAwesomeIcon icon={faPlus} color='white' size={20} />
                </TouchableOpacity>

                {allNotes.length > 0 ? < FlatList style={{ flex: 1 }}
                    data={allNotes} renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.singleNote}
                                onPress={() => navigation.navigate("Note", { id: item.docId })}
                                onLongPress={() => deleteNote(item.docId)}>
                                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                <Text style={styles.content} numberOfLines={3}>{item.content}</Text>
                                <Text style={styles.date}>{item.date}</Text>
                            </TouchableOpacity>
                        )
                    }} key={({ item }) => { item.id }}
                /> :
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: 'center',
                            opacity: 0.5,
                            zIndex: -1,
                        }}>
                        <FontAwesomeIcon style={{ transform: [{ rotate: '45deg' }] }} icon={faFaceSmile} color="gray" size={120} />
                        <Text style={{ fontSize: 16, marginTop: 20, color: 'gray' }}>No Notes yet</Text>
                    </View>}
            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.gray100,
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
        padding: 10,
        borderRadius: 10,
        marginTop: 8
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        color: Theme.colors.gray600
    },
    content: {
        color: Theme.colors.gray600
    },
    date: {
        fontSize: 12,
        color: Theme.colors.gray600,
        fontStyle: 'italic',
        textAlign: "right",
        marginTop: 5
    },
    addBtn: {
        position: "absolute",
        bottom: 50,
        right: 20,
        backgroundColor: Theme.colors.maroon500,
        padding: 15,
        borderRadius: 50
    }

})