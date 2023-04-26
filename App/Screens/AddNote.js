import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Theme } from '../Services/Theme'
import { TextInput } from 'react-native-paper'
import { AppButton } from '../Components/AppButton'

export function AddNote() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function postNote() {
        const now = new Date()
        const obj = {
            title, content,
            date: now.toDateString() + " " + now.toLocaleTimeString(),
            id: now.getTime(),
        }
        console.log(obj);
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