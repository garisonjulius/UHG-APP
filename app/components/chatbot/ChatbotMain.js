import React from "react";
import {View,  StyleSheet, Text, KeyboardAvoidingView} from "react-native";
import InputBar from "./InputBar";
import ChatbotHeader from "./ChatbotHeader";
import Prompts from "./Prompts"
const ChatbotMain = () => {

    return(

        <View style = {styles.container} >
            <Prompts/>  
            <InputBar/>                                 
        </View>
    );
};

export default ChatbotMain;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#CDCDCD",
    },
});
