import React from "react";
import {View,  StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";

const Prompts = () => {

    return(
        <View style = {styles.prompts}>
            <View style = {styles.examplePrompt}>
                <Text style = {styles.examplePromptText}>Welcome to Elena.AI Sarah! Here are examples of requests I can accomodate:</Text>
            </View>

            <View style = {styles.firstRowPrompts}>
                <TouchableOpacity>
                    <View style = {styles.firstRowContent}>
                        <Text style = {styles.firstRowTextOne}>Find a provider</Text>
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity>
                    <View style = {styles.firstRowContent}>
                        <Text style = {styles.firstRowTextTwo}>My plan benefits</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>        
         
    );
};

export default Prompts;

const styles = StyleSheet.create({

    prompts: {
        height: 130,
        flexdirection: "column",
        alignItems: "center",
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
});
