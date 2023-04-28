import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Theme } from '../Services/Theme'
import { TextInput } from 'react-native-paper'
import { AppButton } from '../Components/AppButton'
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../Services/Firebase'

export function Note({ navigation, route }) {
    const { id } = route.params
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        onSnapshot(doc(db, "notes", id), (e) => {
            const retun = e.data()
            setContent(retun.content)
            setTitle(retun.title)
        })
    }, [])

    function saveNote() {
        updateDoc(doc(db, "notes", id), {
            title, content
        }).then(() => {
            Alert.alert(
                "Save Note!",
                "Note has been saved successfully",
            )
        }).catch(() => {
            Alert.alert('Error', 'An unknown error occured while deleting this post')
        })
    }

    function deleteNote() {
        Alert.alert(
            "Delete Note!",
            "Are you sure you want to delete this note?",
            [{ text: "No" }, {
                text: "Yes", onPress: () => {
                    deleteDoc(doc(db, "notes", id))
                        .then(() => {
                            navigation.goBack()
                        })
                        .catch(() => {
                            Alert.alert('Error', 'An unknown error occured while deleting this post')
                        })
                }
            }]
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholder='Title'
                    activeUnderlineColor='none'
                    onChangeText={(text) => setTitle(text)}
                    style={{ fontWeight: "bold", fontSize: 20, color: Theme.colors.gray700 }}
                    value={title}
                />
                <TextInput
                    placeholder='Content'
                    value={content}
                    activeUnderlineColor='none'
                    multiline={true}
                    onChangeText={(text) => setContent(text)}
                    numberOfLines={5}
                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <AppButton style={{ margin: 10 }} color={"#136e01"} onPress={saveNote}>Save</AppButton>
                <AppButton style={{ margin: 10 }} onPress={deleteNote}>Delete</AppButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.gray200,
    }
})