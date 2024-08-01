import React, { useState, useEffect} from "react";
import { View, Pressable, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

const FloatingChatIcon = ({ navigation }) => {
    const [showBubble, setShowBubble] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowBubble(false);
    //     }, 10000);

    //     return () => clearTimeout(timer); // Cleanup the timer on component unmount
    // }, []);

    return (
        <Pressable onPress={() => navigation.navigate('ChatbotMain')} style={[floatingChatStyles.circle, floatingChatStyles.bottomRight]}>
            <Image style={floatingChatStyles.robot} source={require('../../assets/chat-logo.png')} />
            {showBubble && (
                <ImageBackground style={floatingChatStyles.bubble} source={require('../../assets/bubble.png')}>
                    <Text style={floatingChatStyles.bubbleText}>Hello Sarah! I’m Elena, your personal assistant. Click me if you have any questions</Text>
                </ImageBackground>
            )}
        </Pressable>
    );
};


const floatingChatStyles = StyleSheet.create({
    bubble: {
        margin: 'auto',
        paddingBottom: 5,
        width: 150,
        height: 120,
        right: 145,
        bottom: 55
    },
    bubbleText: {
        top: 15,
        left: 3,
        margin: 15,
        fontSize: 10,
        color: "black",
        zIndex: 5,
        alignContent: "center",
        fontWeight: "bold"
    },
    circle: {
        backgroundColor: '#02226d',
        width: 48, 
        height: 48,
        borderRadius: 45,
        elevation: 5,
        borderColor: 'white',
        borderWidth: 3,
    },
    bottomRight: {
        position: 'absolute',
        bottom: 7,
        right: 7,
    },
    robot: {
        margin: 'auto',
        paddingBottom: 5,
        width: 36,
        height: 36,
        top: 28
    },
});

export default FloatingChatIcon;