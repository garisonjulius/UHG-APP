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
import Spotlight from "../components/Spotlight";

function Home({navigation}) {
  const [carouselPage, setCarouselPage] = useState(0);
  // Initially set renderPopUp to false. Once user data is fetched,
  // it will be updated to true and trigger the popup to display
  // if the user has not clicked 'Do not show again'
  const [renderPopUp, setRenderPopUp] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [firstInitial, setFirstInitial] = useState(null);
  const [lastInitial, setLastInitial] = useState(null);
  const [planID, setPlanID] = useState(null);
  const [recID, setRecID] = useState(null);
  const [recReasoning, setRecReasoning] = useState(null);
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);

  uid = 1;
  
  useCarouselEffect(carouselPage, setCarouselPage, data, flatListRef, intervalRef);

  useEffect(() => {
    // Fetch user information
    fetch('http://10.0.2.2:5000/user/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.display_rec_pop_up == 1) {
          setRenderPopUp(true);
        }
        else {
          setRenderPopUp(false);
        }
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setPlanID(data.pid);
        setRecID(data.rid);
        setRecReasoning(data.ai_rec_reasoning);
      })
      .catch(err => {
        alert(err)
      });
    },[]);

  return (
    <SafeAreaView style={styles.container}>
      {renderPopUp && <PlanNotif 
                        stopRender={
                          () => setRenderPopUp(false)
                        } 
                        displayPopUp={renderPopUp} 
                        recPlanTitle={'UHC Gold Advantage'}
                        navigation={navigation} />}
      <View style={styles.headerContainer}>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.buttonFont}> {firstName && firstName[0]}{lastName && lastName[0]}</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.nameContainer}>
          <Text style={styles.headerName}> {firstName} {lastName}</Text>
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
      <Spotlight />
    </SafeAreaView>
  );
}


export default Home;
