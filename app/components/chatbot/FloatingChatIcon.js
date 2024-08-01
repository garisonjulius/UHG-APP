import React from 'react';
import { View, Pressable, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

const FloatingChatIcon = ({navigation, uid}) => {
    return (
        <Pressable onPress={() => navigation.navigate('ChatbotMain', {uid:uid})} style={[floatingChatStyles.circle, floatingChatStyles.bottomRight]}>
            <Image style={floatingChatStyles.robot} source={require('../../assets/chat-logo.png')} />
        </Pressable>
    );
}


const floatingChatStyles = StyleSheet.create({
    circle: {
        backgroundColor: '#02226d',
        width: 60, 
        height: 60,
        borderRadius: 45,
        elevation: 5,
        borderColor: 'white',
        borderWidth: 3,
    },
    bottomRight: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    robot: {
        margin: 'auto',
        paddingBottom: 5,
        width: 45,
        height: 45,
    },
});

export default FloatingChatIcon;