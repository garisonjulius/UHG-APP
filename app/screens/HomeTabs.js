// HomeStack.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'; // Your home screen component
import FindCare from './FindCare';
import Rx from './Rx';
import Menu from './Menu';
import Benefits from './Benefits';
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native";


const Tab = createBottomTabNavigator();

function HomeTabs({uid}) {
  return(
  <Tab.Navigator
        initialRouteName="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor = focused ? "#41c0da" : "white"; // White when not focused
            let iconSize = route.name === "Home" ? 45 : size;

            if (route.name === "Home") {
              return (
                <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#02226d", 
                    //paddingTop: 40,
                  }}
                >
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={iconSize}
                    color={iconColor}
                  />
                </View>
              );
            } else if (route.name === "Benefits") {
              iconName = focused ? "umbrella" : "umbrella-outline";
            } else if (route.name === "Find Care") {
              iconName = focused ? "heart-circle" : "heart-circle-outline";
            } else if (route.name === "Rx") {
              iconName = focused ? "medical" : "medical-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "menu" : "menu-outline";
            }

            return (
              <Ionicons name={iconName} size={iconSize} color={iconColor} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "white", 
          inactiveTintColor: "white", 
          style: {
            height: 100, 
            backgroundColor: "#02226d", 
          },
          labelStyle: {
            fontSize: 12, 
          },
        }}
      >
        <Tab.Screen
          name="Benefits"
          component={Benefits}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 80, 
              backgroundColor: "#02226d",
              paddingBottom: 20,
            },
          }}
        />
        <Tab.Screen
          name="Find Care"
          component={FindCare}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 80, 
              backgroundColor: "#02226d",
              paddingBottom: 20,
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          initialParams={{uid: uid}}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 80, 
              backgroundColor: "#02226d",
              paddingBottom: 20,
            },
          }}
        />
        <Tab.Screen
          name="Rx"
          component={Rx}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 80, 
              backgroundColor: "#02226d",
              paddingBottom: 20,
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 80, 
              backgroundColor: "#02226d",
              paddingBottom: 20,
            },
          }}
        />
      </Tab.Navigator>
  );
}

export default HomeTabs;
