import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text,View, TouchableHighlight, TouchableOpacity } from 'react-native';

function Home(props) {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableHighlight>
                <View style={styles.button}>
                    <Text style={styles.buttonFont}> SH </Text>
                </View>
            </TouchableHighlight>
            <View style={styles.nameContainer}>
                <Text style={styles.headerName}> Sarah Hayes</Text>
                <Text style={styles.headerHome}> Home </Text>
            </View>
        </View>
        <TouchableOpacity style={styles.dashboardContainer}>
            <Text> DashBoard1 </Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    headerContainer: {
        backgroundColor: "#02226d",
        padding: 20,
        elevation: 5,
        height: 150,
        width: 450,
        flexDirection: "row",
        alignItems: "center",
    },
    nameContainer: {
        marginLeft: 10,
    },
    headerName: {
        color: "white",
        fontSize: 18,

    },
    headerHome: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#edf8fc",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    buttonFont: {
        color: "#02226d",
        fontSize: 22,
        fontWeight: "bold",
    },
    dashboardContainer: {
        top: "15%",
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        height: "30%",
        width: "85%",
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 10,

    },
  });

export default Home;