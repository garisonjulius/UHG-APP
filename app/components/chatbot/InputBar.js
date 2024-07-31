import React from "react"
import {useState} from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Touchable} from "react-native"
import { GiftedChat } from "react-native-gifted-chat";

const InputBar = () => {

    // const handleButtonClick = () => {
    //    console.log(typeof(inputMessage))
    //    console.log(typeof(inputMessage.toString()))

    //    fetch(`http://10.0.2.2:5000/getResponse/1/${inputMessage}`)
    //    .then((response) => {
    //        console.log(response)
    //    })
    // //    .then((data) => {
    //      //console.log(data)
    // //    })
    //    .catch(err => {
    //        console.log(err)
    //     })    
    // }
    const[messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState(null);
    const [outputMessage, setOutputMessage] = useState(null);
    uid = 1;

    const handleButtonClick = () => {

        const message = {
            _id:Math.random().toString(36).substring(7),
            text: inputMessage,
            createdAt: new Date(),
            user: {_id:1}
        }
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [message])
        )

        fetch(`http://10.0.2.2:5000/getResponse/${uid}/${inputMessage}`)
        .then(response => response.json())
        .then(data => {
            console.log(data["chat_response"]),
            setOutputMessage(data["chat_response"])

            const message = {
                _id:Math.random().toString(36).substring(7),
                text: data["chat_response"],
                createdAt: new Date(),
                user: {_id:2, name: "Open AI"}
            }

            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, [message])
            )
        })
        .catch(err => {
            console.log("Invalid Test");
        });
    };

    const handleTextInput = (text) => {
        setInputMessage(text)
    }   

    //<KeyboardAvoidingView behavior = "height" keyboardVerticalOffset={210}>

    return(

        <View>
            <View>
                <GiftedChat messages = {messages} renderInputToolbar={(() => { })} user={{_id:1}}/>
            </View>
            <View style = {styles.inputField}>
                <View style = {styles.inputBar}> 
                    <View>
                        <TextInput placeholder= "Ask Me Anything..." placeholderTextColor={"black"} style={styles.placeholderText} onChangeText = {handleTextInput}></TextInput>   
                    </View>
                    <TouchableOpacity onPress = {handleButtonClick}>
                        <View style = {styles.sendButton}>
                            <Image
                                source={require("../../assets/arrow-right-circle.png")}
                                style = {styles.arrowImage}/>
                        </View>     
                    </TouchableOpacity>
                </View>
            </View>
        </View>           
    );
};


export default InputBar;

const styles = StyleSheet.create({

    inputField:{
        flex: 1,
        justifyContent: "flex-end"
    },

    inputBar: {
        flexDirection: "row",
        marginBottom: 15,
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
    }
});
