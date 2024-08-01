import React from "react";
import {useState, useEffect} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, Touchable} from "react-native"

var windowWidth = Dimensions.get('window').width;
import { GiftedChat } from "react-native-gifted-chat";

const InputBar = ({name, uid}) => {

    const[messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState(null);
    const [outputMessage, setOutputMessage] = useState(null);
    const [promptClicked, setPromptClicked] = useState(false);




    const handlePromptProviderClick = () => {
        
        setInputMessage("Find a provider")
        setPromptClicked(true)
        //handleButtonClick()
        //console.log(inputMessage)
    }

    const handlePromptPlanClick = () => {
        setInputMessage("My plan benefits")
        setPromptClicked(true)

        //handleButtonClick()
    }

    useEffect(() => {
        if(promptClicked){
            handleButtonClick();
            setPromptClicked(false);
        }
    }, [inputMessage])

    // useEffect(() =>{
    //     if(inputMessage === "My plan benefits"){
    //         handleButtonClick();
    //     }
    // }, [inputMessage])

    const handleTextInput = (text) => {
        setInputMessage(text)
        console.log(inputMessage)
    }

    const handleButtonClick = () => {
        const tempInputMsg = inputMessage;
        // Clear input message
        setInputMessage("");

        const message = {
            _id:Math.random().toString(36).substring(7),
            text: tempInputMsg,
            createdAt: new Date(),
            user: {_id:1}
        }
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [message])
        )

        fetch(`http://10.0.2.2:5000/getResponse/${uid}/${tempInputMsg}`)
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

    //<KeyboardAvoidingView behavior = "height" keyboardVerticalOffset={210}>

    return(

        <View>

            <View style = {styles.prompts}>
                <View style = {styles.examplePrompt}>
                    <Text style = {styles.examplePromptText}>Welcome to Elena.AI {name}! Here are examples of requests I can accomodate:</Text>
                </View>

                <View style = {styles.firstRowPrompts}>
                    <TouchableOpacity onPress={handlePromptProviderClick}>
                        <View style = {styles.firstRowContent}>
                            <Text style = {styles.firstRowTextOne}>Find a provider</Text>
                        </View>
                    </TouchableOpacity>
            
                    <TouchableOpacity onPress={handlePromptPlanClick}>
                        <View style = {styles.firstRowContent}>
                            <Text style = {styles.firstRowTextTwo}>My plan benefits</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>   

            <View>
                <GiftedChat messages = {messages} renderInputToolbar={(() => { })} 
                user={{_id:1}}
                minInputToolbarHeight={70}/>
            </View>

            <View style = {styles.inputField}>
                <View style = {styles.inputBar}> 
                    <View style = {styles.fixWidth}>
                        <TextInput multiline={true} placeholder="Ask me anything..." value={inputMessage} onSubmitEditing={handleButtonClick} placeholderTextColor={"grey"} style={styles.placeholderText} onChangeText = {handleTextInput}></TextInput>   
                    </View>
                    <TouchableOpacity onPress={handleButtonClick}>
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

    prompts: {
        height: 130,
        flexdirection: "column",
        alignItems: "center",
        position: "absolute",
        marginLeft: 25, 
        marginTop: 25,
        zIndex: 1
    },

    examplePrompt: {
        flex: 1,
        width: 360,
        marginTop: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },

    examplePromptText: {
        fontWeight: "bold"
    },
   
    firstRowPrompts: {
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
    },

    firstRowContent: {
        padding: 10, 
        width: 130,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 15,
        marginHorizontal: 5,
    },

    firstRowContent: {
        padding: 10, 
        width: 130,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 15,
        marginHorizontal: 5,
    },

    firstRowTextOne: {
        fontWeight: "bold",
        marginLeft: 7
    },

    firstRowTextTwo: {
        fontWeight: "bold",
    },


    inputField:{
        flex: 1,
        justifyContent: "flex-end",
        //position: "absolute"

    },

    inputBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
    }, 
    
    placeholderText: {
        flex: 1,
        fontWeight: "bold", 
        fontSize: 18,
        marginLeft: 20,
    },

    sendButton:{
        marginTop: 10,
        marginRight: 10
    },

    arrowImage: {
        width: 30,
        height: 30,
    },

    fixWidth: {
        maxWidth: '80%',
    },
});
