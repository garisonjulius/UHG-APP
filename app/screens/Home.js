import React, { useState, useEffect, useRef }from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { data, renderCarouselItem, handleScroll, PageIndicator, useCarouselEffect } from "../components/Carousel";
import PlanNotif from '../components/PlanNotif';

import styles from '../styles'
import {
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
  const [carouselPage, setCarouselPage] = useState(0);
  const [renderPopUp, setRenderPopUp] = useState(true);
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  
  useCarouselEffect(carouselPage, setCarouselPage, data, flatListRef, intervalRef);

  displayPopUp = true;
  return (
    <SafeAreaView style={styles.container}>
      {/* ADDITION: PopUp */}
      {renderPopUp && <PlanNotif updateRenderPopUp={(popUpRendered) => setRenderPopUp(!popUpRendered)} displayPopUp={true} recPlanTitle={'UHC Gold Advantage'}/>}
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
          <Image 
          source={require("../assets/forward-icon.png")}
          style={styles.memberForward}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.claimsContainer}> 
          <Text style={styles.claimText}> Claims</Text>
          <Text style={styles.claimNum}> 1 </Text>
          <Text style={styles.claimDays}> In Last 60 Days </Text>
          <Image 
          source={require("../assets/forward-icon.png")}
          style={styles.claimForward}/>
          </TouchableOpacity>
      </TouchableOpacity>
      <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderCarouselItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onScroll={(event) => handleScroll(event, carouselPage, setCarouselPage)}/>
      <PageIndicator data={data} carouselPage={carouselPage}/>
    </SafeAreaView>
  );
}


export default Home;
