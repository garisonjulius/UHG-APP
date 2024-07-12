import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FindCare = () => {
  return (
    <View style={styles.container}>
      <Text>Find Care</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FindCare;
