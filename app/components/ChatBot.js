import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  // Dummy data to simulate a conversation with a chatbot
  const dummyMessages = [
    {
      _id: 1,
      text: 'Hello! How can I assist you today?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native ChatBot',
      },
    },
  ];

  // Function to handle sending messages
  const onSend = newMessages => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
    // Here you would typically send newMessages to your backend or handle them
    // based on your chatbot logic.
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{ _id: 1 }}  // Dummy user ID, you can customize or pass user info as needed
    />
  );
};

export default ChatBot;
