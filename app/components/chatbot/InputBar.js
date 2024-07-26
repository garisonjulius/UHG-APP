import React from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from "react-native"

const InputBar = () => {

    return(
            <View style = {styles.buttonInput}>
                <View style = {styles.inputBar}> 
                    <TextInput placeholder= "...Chat" placeholderTextColor={"black"} style={styles.placeholderText}></TextInput>   
                </View>
            </View> 

    );
};




export default InputBar;

const styles = StyleSheet.create({

    inputField: {
        //flex: 1,
        //alignItems: "flex-end",
        //justifyContent: "flex-end",
        //marginBottom: 10,
        //backgroundColor: "#CDCDCD",
    }, 

    buttonInput: {
        flexDirection: "row"
    },

    inputBar: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        //marginTop: 300,
        marginBottom: 10,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
    }, 
    
    placeholderText: {
        flex: 1,
        fontWeight: "bold", 
        fontSize: 18,
        marginLeft: 20
    }
});
