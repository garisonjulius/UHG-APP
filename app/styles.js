import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
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
      marginLeft: 5,
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
      borderRadius: 60 / 2,
      marginLeft: 10,
    },
    buttonFont: {
      color: "#02226d",
      fontSize: 22,
      fontWeight: "bold",
    },
    bell: {
      left: "140%",
      width: 60,
      height: 60,
    },
    dashboardContainer: {
      top: "18%",
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      height: "30%",
      width: "90%",
      aspectRatio: 1,
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 10,
    },
    recommendations: {
      bottom: 80,
      textAlign: 'center',
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 5,
      paddingLeft: 5,
    },
    cardsContainer: {
      position: "absolute",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      bottom: 10,
      left: 10,
      height: "60%",
      width: "45%",
      aspectRatio: 1,
      backgroundColor: "#021842",
      borderRadius: 10,
    },
    cardText: {
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
      left: 5,
      top: 5,
    },
    logo: {
      width: 50,
      height: 50,
      position: "absolute",
      bottom: 10,
      right: 0,
    },
    memberForward: {
      width: 30,
      height: 30,
      position: "absolute",
      right: 10,
      top: 8,
      tintColor: "white",
    },
    claimForward: {
      width: 30,
      height: 30,
      position: "absolute",
      right: 10,
      top: 8,
      tintColor: "#021842",
    },
    MDVText: {
      color: "white",
      fontSize: 14,
      left: 10,
      top: 15,
    },
    claimsContainer: {
      position: "absolute",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      bottom: 10,
      right: 10,
      height: "60%",
      width: "45%",
      aspectRatio: 1,
      backgroundColor: "#edf8fc",
      borderRadius: 10,
    },
    claimText: {
      color: "#021842",
      fontSize: 22,
      fontWeight: "bold",
      left: 5,
      top: 5,
    },
    claimNum: {
      color: "#021842",
      fontSize: 22,
      fontWeight: "bold",
      top: 50,
      left: 5,
    },
    claimDays: {
      color: "black",
      fontSize: 14,
      top: 50,
      left: 5,
    },
    carousel: {
      height: "125%",
      alignItems: "center",
    },
    pageIndicator: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
      bottom: "45%"
    },
    pageIndicatorBead: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#ccc",
      margin: 5,
    },
    activePageIndicatorBead: {
      backgroundColor: "#021842"
    },
    dashboardContainer2: {
      marginTop: "55%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      height: "30%",
      width: "90%",
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 10,
    },
    overviewTitle: {
      color: "#02226d",
      fontSize: 28,
      fontWeight: "bold",
      right: "15%",
      bottom: "24%",
    },
    circle: {
      bottom: "24%",
      left: "15%",
      borderColor: "#02226d",
      borderWidth: 5,
      alignItems: "center",
      justifyContent: "center",
      width: 45,
      height: 45,
      borderRadius: 45 / 2,
    },
    exclamMark: {
      color: "#021842",
      fontSize: 26,
      fontWeight: "bold",
    },
    contentContainer: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      bottom: 25,
      height: "65%",
      width: "90%",
      aspectRatio: 1,
      backgroundColor: "#edf8fc",
      borderRadius: 10,
    },
    planidContainer: {
      right: "25%",
      top: "22.5%",
      alignItems: "center",
      gap: 10,
      flexDirection: "column",
    },
    planText: {
      color: "black",
      fontSize: 22,
      fontWeight: "bold",
    },
    coverageContainer: {
      left: "25%",
      bottom: "32%",
      alignItems: "center",
      gap: 5,
    },
    coverageText: {
      color: "black",
      fontSize: 22,
      fontWeight: "bold",
    },
    myplanText: {
      color: "#02226d",
      fontSize: 18,
      fontWeight: "bold",
    },
    spendingTitle: {
      color: "#02226d",
      fontSize: 28,
      fontWeight: "bold",
      right: "35%",
      bottom: "24%",
      marginHorizontal: "15%",
    },
    familyPlanText: {
      color: "#02226d",
      fontSize: 22,
      fontWeight: "bold",
      top: "30%",
      marginRight: "55%",
    },
    networkText: {
      color: "#02226d",
      marginRight: "55%",
      top: "35%",
      fontWeight: "bold",
    },
    spendingForward: {
      width: 30,
      height: 30,
      position: "absolute",
      left: 55,
      bottom: 10,
      tintColor: "#021842",
    },
    deductibleText: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      bottom: "30%",
      marginLeft: "45%",
      textDecorationLine: "underline",
    },
    pocketText: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      bottom: "23%",
      marginLeft: "45%",
      textDecorationLine: "underline",
    },
    remainingContainer: {
      flexDirection: "row",
      bottom: "13%",
      marginLeft: "45%"
    },
    numberText: {
      color: "#02226d",
      fontSize: 18,
      fontWeight: "bold",
    },
    remainingText: {
      fontSize: 18,
    },
    remainingContainer2: {
      flexDirection: "row",
      bottom: "10%",
      marginLeft: "45%"
    },
    numberText2: {
      color: "#02226d",
      fontSize: 18,
      fontWeight: "bold",
    },
    remainingText2: {
      fontSize: 18,
    },
    deductibleBar: {
      marginLeft: "45%",
      width: "20%",
      height: "10%",
      bottom: "28%",
    },
    pocketBar: {
      marginLeft: "45%",
      width: "20%",
      height: "10%",
      bottom: "20%",
    },
    costTitle: {
      color: "#02226d",
      fontSize: 28,
      fontWeight: "bold",
      right: "20%",
      bottom: "24%",
      marginHorizontal: "6%",
    },
    costContainer1: {
      flexDirection: "column",
      right: "30%",
      top: "39%",
      alignItems: "center",
    },
    costText: {
      color: "black",
      fontSize: 24,
      fontWeight: "bold", 
    },
    costNumbers: {
      color: "#02226d",
      fontSize: 22,
      fontWeight: "bold",
    },
    costContainer2: {
      flexDirection: "column",
      left: "25%",
      bottom: "45%",
      alignItems: "center",
    },
    additionalCostText: {
      color: "black",
      fontSize: 24,
      fontWeight: "bold",
    },
    costNumbers2: {
      color: "#02226d",
      fontSize: 22,
      fontWeight: "bold",
    },
    spotlightContainer: {
      position: "absolute",
      alignItems: "left",
      justifyContent: "center",
      flexDirection: "column",
      bottom: 30,
      height: "13%",
      width: "90%",
      aspectRatio: 1,
      backgroundColor: "white",
      borderRadius: 10,
    },
    spotlightText: {
      color: "#02226d",
      alignItems: "left",
      justifyContent: "left",
      bottom: 80,
      fontSize: 28,
      fontWeight: "bold",
      left: 5
    },
    spotlightNewsText: {
      color: "#02226d",
      textAlign: "center",
      bottom: 15,
      fontSize: 18,
      fontWeight: "bold",
      left: 18
    },
    spotlightNewsContainer: {
      position: "absolute",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      bottom: 10,
      left: 45,
      height: "65%",
      width: "55%",
      aspectRatio: 1,
      backgroundColor: "white",
      borderRadius: 10,
    },
    spotlightMonthContainer:{
      position: "absolute",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      bottom: 0,
      right: 0,
      height: "100%",
      width: "25%",
      aspectRatio: 1,
      backgroundColor: "#d7d7d7",
      borderRadius: 10,
    },
    spotlightCalendar: {
      width: 45,
      height: 50,
      position: "absolute",
      right: 23,
      top: 20,
      tintColor: "#02226d",
    },
    spotlightForward: {
      width: 30,
      height: 30,
      position: "absolute",
      left: 335,
      bottom: 115,
      tintColor: "#021842"
    }
  });
  
  export default styles;
  