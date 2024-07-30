import React from "react";
import {View,  StyleSheet, Text, KeyboardAvoidingView} from "react-native";
import InputBar from "../components/chatbot/InputBar";
import ChatbotHeader from "../components/chatbot/ChatbotHeader";
import Prompts from "../components/chatbot/Prompts"
const ChatbotMain = () => {

    return(

        <View style = {styles.container} >
            <Text style = {{fontWeight: "bold"}}>Chatbot</Text>                                 
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
