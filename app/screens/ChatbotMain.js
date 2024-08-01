import React from "react";
import {View,  StyleSheet, Text, KeyboardAvoidingView} from "react-native";
import InputBar from "../components/chatbot/InputBar";
import ChatbotHeader from "../components/chatbot/ChatbotHeader";
import Prompts from "../components/chatbot/Prompts"

const ChatbotMain = ({uid}) => {
    return(
        <View style = {styles.container} >
            <InputBar uid = {uid}/>                                 
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
