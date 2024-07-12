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

export default function App() {
  return <NavBar />;
}
