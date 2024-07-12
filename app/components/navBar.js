import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Benefits from "../screens/Benefits";
import FindCare from "../screens/FindCare";
import Px from "../screens/Px";
import Menu from "../screens/Menu";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Benefits") {
              iconName = focused ? "umbrella" : "umbrella-outline";
            } else if (route.name === "FindCare") {
              iconName = focused ? "heart-circle" : "heart-circle-outline";
            } else if (route.name === "Px") {
              iconName = focused ? "medical" : "medical-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "menu" : "menu-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
          style: {
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide the header for Home screen
        />
        <Tab.Screen
          name="Benefits"
          component={Benefits}
          options={{ headerShown: false }} // Hide the header for Benefits screen
        />
        <Tab.Screen
          name="FindCare"
          component={FindCare}
          options={{ headerShown: false }} // Hide the header for FindCare screen
        />
        <Tab.Screen
          name="Px"
          component={Px}
          options={{ headerShown: false }} // Hide the header for Px screen
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }} // Hide the header for Menu screen
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
