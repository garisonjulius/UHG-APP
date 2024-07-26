import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatBot from "./app/components/ChatBot";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";

import NavBar from "./app/components/navBar";
import { useEffect } from "react";
import axios from "axios";


export default function App() {
  useEffect(() => {
    sendRequestToServer(); // Fetch data on component mount
  }, []);
  
  const sendRequestToServer = async () => {
    try {
      const uid = 4; // Replace with your variable value
      const displayPopUp = false; // Replace with your boolean value
  
      // Perform the POST request
      const response = await axios.post('http://10.0.2.2:5000/updateDisplay', {
        uid: uid, 
        displayPopUp: displayPopUp 
      });
  
      console.log(response.data);
  
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };
  

  return <NavBar />
}

