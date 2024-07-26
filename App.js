import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import ChatbotMain from "./app/components/chatbot/ChatbotMain";
import ChatbotHeader from "./app/components/chatbot/ChatbotHeader";
import InputBar from "./app/components/chatbot/InputBar";

export default function App() {
  return <ChatbotMain />;
  //return<NavBar/>
  //return <ChatbotHeader/>
  //return <InputBar/>
}