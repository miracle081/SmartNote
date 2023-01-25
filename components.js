import { Text, View, StyleSheet, Image } from "react-native";

export function Components() {
   
    return (
        <View style={styles.container}>
            <Text style={styles.introText}>Reacy Native Component</Text>
            <Image source={require("./assets/react.jpg")} style={styles.image} />
            <Image source={{uri:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"}} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    introText:{
        backgroundColor:"#ce1e1e",
        color:'white',
        padding:15,
        // borderRadius:10,
        textAlign:"center",
        fontSize:20,
        fontWeight:'bold',
    },
    image:{
        width:"100%",
        height:200,
        marginVertical:5,
    }
})
