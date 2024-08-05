import React from "react";
import NavBar from "./app/components/navBar";


//hides default props console warning
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  return<NavBar/>
}

