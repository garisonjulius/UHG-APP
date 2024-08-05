import React, { useState, useEffect} from "react";
import {Pressable, StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

const FloatingChatIcon = ({ navigation, uid}) => {
    const [showBubble, setShowBubble] = useState(true);
    const [name, setName] = useState('');

    useEffect(() => {
        fetch(`http://10.0.2.2:5000/user/${uid}`)
        .then(
            response => response.json()
        )
        .then(
            data => setName(data.first_name)
        )
        .catch(err => {
            console.error('Request for user information failed', err);
          }
        )
    }, [uid]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBubble(false);
        }, 5000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <View style={floatingChatStyles.container}>
            <Pressable onPress={() => navigation.navigate('ChatbotMain', {name:name, uid:uid})} style={floatingChatStyles.circle}>
                <Image style={floatingChatStyles.robot} source={require('../../assets/chat-logo.png')} />
            {showBubble && (
                <ImageBackground style={floatingChatStyles.bubble} source={require('../../assets/bubble.png')}>
                    <Text style={floatingChatStyles.bubbleText}>Hello {name}! I’m Elena, your personal assistant. Click me if you have any questions</Text>
                </ImageBackground>
            )}
            </Pressable>
        </View>
    );
};


const floatingChatStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 7,
        right: 7,
        alignItems: 'center',
    },
    bubble: {
        position: 'absolute',
        width: 150,
        height: 120,
        bottom: 35,
        right: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bubbleText: {
        margin: 15,
        fontSize: 10,
        color: "black",
        fontWeight: "bold",
        textAlign: 'center',
    },
    circle: {
        backgroundColor: '#02226d',
        width: 48, 
        height: 48,
        borderRadius: 24,
        elevation: 5,
        borderColor: 'white',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    robot: {
        width: 36,
        height: 36,
    },
});

export default FloatingChatIcon;