import React from "react"
import {View,  StyleSheet, KeyboardAvoidingView} from "react-native"
import InputBar from "./InputBar";
import ChatbotHeader from "./ChatbotHeader";

const ChatbotMain = () => {

    return(

        <View style = {styles.container} >
             <ChatbotHeader/>

             <KeyboardAvoidingView style = {styles.inputField} behavior = "height">
                <InputBar/> 
             </KeyboardAvoidingView>
                                
        </View>
    );
};

export default ChatbotMain;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#CDCDCD",
    },

    inputField: {
        flex: 1,
    }
});
