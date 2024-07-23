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

// export default function App() {
//   return <NavBar />
// }

const App = () => {
  return (
    <View style={styles.container}>
      <ChatBot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default App;
