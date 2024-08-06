import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Benefits from "../screens/Benefits";
import FindCare from "../screens/FindCare";
import Rx from "../screens/Rx";
import Menu from "../screens/Menu";
import Rec from "../screens/Rec";
import ChatbotMain from "./chatbot/ChatbotMain";

import { View } from "react-native";
import HomeTabs from "../screens/HomeTabs";
import { createStackNavigator } from "@react-navigation/stack";
import PlanNotif from "./PlanNotif";

const Stack = createStackNavigator();

const NavBar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>
        <Stack.Screen name="Rec" component={Rec} options={{title: 'Recommendations'}}/>
        <Stack.Screen name="ChatbotMain" component={ChatbotMain} options={{headerShown: true, title: 'Elena.AI'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
