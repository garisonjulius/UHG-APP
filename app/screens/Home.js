import React, {useState, useRef}from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  Animated
} from "react-native";

function Home(props) {
  const scrollx = useRef(new Animated.Value(0).current);
  const [carouselPage, setCarouselPage] = useState(0);
  const {width} = useWindowDimensions();
  const data = [
    { title: "My Plan Overview", subtitle1: 'Plan ID', subtitle2: 'Coverage' },
    { title: "Spending", subtitle1: 'Deductible', subtitle2: 'Out of Pocket' },
    { title: "Cost Estimates", subtitle1: 'X-Ray', subtitle2:'Teeth Clean', subtitle3: 'Routine Check', subtitle4: 'Vision Test' }
  ];

  const renderCarouselItem = ({ item, index }) => {
    let titleStyle = styles.overviewTitle;
    if (item.title === "Spending") {
      titleStyle = styles.spendingTitle;
    }
    if (item.title === "Cost Estimates") {
      titleStyle = styles.costTitle;
    }

    let subtitleStyle1 = styles.planText;
    let subtitleStyle2 = styles.coverageText;
    if (item.title === "Spending") {
      subtitleStyle1 = styles.deductibleText;
      subtitleStyle2 = styles.pocketText;
    }
    if (item.title === "Cost Estimates") {
      subtitleStyle1 = styles.costText;
      subtitleStyle2 = styles.costText;
    }

  return (
    <View style={[styles.carousel, {width}]}>
      <TouchableOpacity style={styles.dashboardContainer2}>
        <Text style={titleStyle}>{item.title}</Text>
        <View style={styles.circle}>
            <Text style={styles.exclamMark}> ! </Text>
        </View>
        <View style={styles.contentContainer}>
            <Text style={subtitleStyle1}>{item.subtitle1} </Text>
            <Text style={subtitleStyle2}>{item.subtitle2}</Text>
            {item.title === "Cost Estimates" && (
            <>
              <Text style={styles.additionalCostText}>{item.subtitle3}</Text>
              <Text style={styles.additionalCostText}>{item.subtitle4}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
    );
  };

  const PageIndicator = () => (
    <View>
      {data.map(item, index)}
    </View>
  );

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
        <Image  
          source={require("../assets/bell.png")}
          style={styles.bell} />
      </View>
      <TouchableOpacity style={styles.dashboardContainer}>
        <Text style={styles.recommendations}> User Health Recommendations </Text>
        <TouchableOpacity style={styles.cardsContainer}> 
          <Text style={styles.cardText}> Member </Text>
          <Text style={styles.cardText}> Cards</Text>
          <Text style={styles.MDVText}> Medical </Text>
          <Text style={styles.MDVText}> Dental </Text>
          <Text style={styles.MDVText}> Vision </Text>
          <Image 
          source={require("../assets/uhg-logo.png")}
          style={styles.logo}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.claimsContainer}> 
          <Text style={styles.claimText}> Claims</Text>
          <Text style={styles.claimNum}> 1 </Text>
          <Text style={styles.claimDays}> In Last 60 Days </Text>
          </TouchableOpacity>
      </TouchableOpacity>
      <FlatList
      data={data}
      renderItem={renderCarouselItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event}/>
    </SafeAreaView>
  );
}
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
    fontSize: 22,
    fontWeight: "bold",
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
    color: "#021842",
    fontSize: 28,
    fontWeight: "bold",
    right: "15%",
    bottom: "25%",
  },
  circle: {
    bottom: "25%",
    left: "15%",
    borderColor: "#021842",
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
    backgroundColor: "#FAF4F0",
    borderRadius: 10,
  },
  planText: {
    color: "#021842",
    fontSize: 22,
    fontWeight: "bold",
    bottom: "25%",
    marginRight: "65%",
    textDecorationLine: "underline",
  },
  coverageText: {
    color: "#021842",
    fontSize: 22,
    fontWeight: "bold",
    bottom: "45%",
    marginLeft: "55%",
    textDecorationLine: "underline",
  },
  spendingTitle: {
    color: "#021842",
    fontSize: 28,
    fontWeight: "bold",
    right: "35%",
    bottom: "25%",
    marginHorizontal: "15%",
  },
  deductibleText: {
    color: "#021842",
    fontSize: 22,
    fontWeight: "bold",
    bottom: "20%",
    marginRight: "55%",
    bottom: "25%",
    textDecorationLine: "underline",
  },
  pocketText: {
    color: "#021842",
    fontSize: 22,
    fontWeight: "bold",
    bottom: "45%",
    marginLeft: "45%",
    textDecorationLine: "underline",
  },
  costTitle: {
    color: "#021842",
    fontSize: 28,
    fontWeight: "bold",
    right: "20%",
    bottom: "25%",
    marginHorizontal: "5%",
  },
  costText: {
    color: "#021842",
    fontSize: 22,
    fontWeight: "bold",
    top: "32%",
    marginRight: "60%",
    marginVertical: "7%",
    textDecorationLine: "underline",
    
  },
  additionalCostText: {
    color: "#021842",
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    bottom: "65%",
    marginLeft: "45%",
    marginVertical: "7%",
  },
});

export default Home;
