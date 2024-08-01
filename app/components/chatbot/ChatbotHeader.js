import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const ChatbotHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style = {styles.header}>
        <Text style = {styles.title}>Elena.AI</Text>
      </View>    
    </View>
  );
};

export default ChatbotHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: .3,
  },

  header: {
    backgroundColor: '#02226d',
    padding: 20,
    height: 150,
    width: 450,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 40, 
    fontWeight: "bold",
    marginLeft: 10
  },

});
