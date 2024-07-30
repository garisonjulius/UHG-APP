import React from "react"
import {useState} from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, Touchable} from "react-native"

var windowWidth = Dimensions.get('window').width;

const InputBar = () => {

    return(

        <View style = {styles.container}>
                <View style = {styles.inputBar}> 
                    <View styles={styles.fixWidth}>
                        <TextInput multiline={true} placeholder= "Ask me anything..." placeholderTextColor={"black"} style={styles.placeholderText}></TextInput>   
                    </View>
                    <TouchableOpacity >
                        <View style = {styles.sendButton}>
                            <Image
                            source={require("../../assets/arrow-right-circle.png")}
                            style = {styles.arrowImage}/>
                        </View>     
                    </TouchableOpacity>
                </View>
        </View>
            
    );
};


export default InputBar;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: "flex-end"
    },

    inputBar: {
        flexDirection: "row",
        marginBottom: 15,
        maxWidth: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
    }, 
    
    placeholderText: {
        flex: 1,
        fontWeight: "bold", 
        fontSize: 18,
        marginLeft: 20
    },

    sendButton:{
        marginTop: 10,
        marginLeft: 170,
        marginRight: 10
    },

    arrowImage: {
        width: 30,
        height: 30,
    },

    fixWidth: {
        width: '100%',
    }
});
