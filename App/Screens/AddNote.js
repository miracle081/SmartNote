import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { AppButton } from '../Components/AppButton'
import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../Globals/Firebase'
import { Theme } from '../Globals/theme'

export function AddNote({ navigation }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function postNote() {
        const now = new Date()
        const obj = {
            title,
            content,
            date: now.toDateString() + " " + now.toLocaleTimeString(),
            id: now.getTime(),
        }
        addDoc(collection(db, "notes"), obj)
            .then(() => {
                Alert.alert(
                    "Post Note",
                    "Your note has been posted successfully",
                    [{ text: "Ok", onPress: () => navigation.goBack() }]
                )
            })
            .catch(() => {
                Alert.alert(
                    "Post Note",
                    "Failed to post note",
                    [{ text: "Try again" }]
                )
            })
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholder='Title'
                    activeUnderlineColor='none'
                    onChangeText={(text) => setTitle(text)}
                    style={{ fontWeight: "bold", fontSize: 20, color: Theme.colors.gray700 }}
                />
                <TextInput
                    placeholder='Content'
                    activeUnderlineColor='none'
                    multiline={true}
                    onChangeText={(text) => setContent(text)}
                    numberOfLines={5}
                />
            </View>
            <AppButton style={{ margin: 10 }} onPress={postNote} >Post</AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.gray200,
    }
})