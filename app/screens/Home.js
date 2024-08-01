import React, { useState, useEffect, useRef }from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { data, handleScroll, PageIndicator, useCarouselEffect, CarouselItem } from "../components/Carousel";
import PlanNotif from '../components/PlanNotif';
import FloatingChatIcon from '../components/chatbot/FloatingChatIcon';
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
  const [alertIsPressed, setalertIsPressed] = useState(false);
  // Initially set renderPopUp to false. Once user data is fetched,
  // it will be updated to true and trigger the popup to display
  // if the user has not clicked 'Do not show again'
  const [renderPopUp, setRenderPopUp] = useState(false);
  // Fetched user data
  const [userInfo, setUserInfo] = useState(null);
  // Track whether or not algorithm setting rid from AI has been run
  const [ridCalculated, setRidCalculated] = useState(false);
  const [rid, setRid] = useState(null);
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const [fromCarousel, setFromCarousel] = useState(false);

  uid = 2;
  
  useCarouselEffect(carouselPage, setCarouselPage, data, flatListRef, intervalRef);

  useEffect(() => {
    // Fetch user information
    fetch(`http://10.0.2.2:5000/user/${uid}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Set user info with JSON object
        setUserInfo(data);
        // Individually set the renderPopUp variable
        if (data.display_rec_pop_up == 1) {
          setRenderPopUp(true);
        }
        else {
          console.log("User previously selected do not show again.")
          setRenderPopUp(false);
        }

        // Verify user has a recommended plan (this code runs when user information is fetched)
        if (data['rid'] == null) {
          console.error("User does not have a recommended plan");
        }
        else {
          console.log("User", uid, "'s recommended plan is:", data['rid']);
          setRid(data['rid']);
          setRidCalculated(true);
        }
      })
      .catch(err => {
        alert(err)
      });
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {userInfo && ridCalculated && renderPopUp && <PlanNotif 
                        stopRender={
                          () => setRenderPopUp(false)
                        } 
                        displayPopUp={renderPopUp} 
                        rid={rid}
                        navigation={navigation}
                        uid={uid} 
                        fromCarousel={fromCarousel}
                        />}

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.buttonFont}> {userInfo && userInfo['first_name'][0]}{userInfo && userInfo['last_name'][0]}</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.nameContainer}>
          <Text style={styles.headerName}> {userInfo && userInfo['first_name']} {userInfo && userInfo['last_name']}</Text>
          <Text style={styles.headerHome}> Home </Text>
        </View>
        <Image  
          source={require("../assets/bell.png")}
          style={styles.bell} />
      </View>

      {/* First box on dashboard */}
      <View style={[styles.dashboardContainer, {marginTop: 10}]}>
        <View style={styles.mainInfo}>
          <View style={styles.wellness}>
            <Text style={styles.wellnessTitle}>Wellnes</Text>
            <Text style={styles.wellnessText}>According to Cleveland clinic, bicycle helmets reduce the likelihood of traumatic brain injury by 53% in the event of an accident.</Text>
          </View>

          {/* Member Card */}
          <View style={styles.sideBySideCards}>
            <View style={styles.cardsContainer}>
              <Text style={styles.cardText}> Member </Text>
              <Text style={styles.cardText}> Cards</Text>
              <Text style={styles.MDVText}> Medical </Text>
              <Text style={styles.MDVText}> Dental </Text>
              <Text style={styles.MDVText}> Vision </Text>
              <Image 
                source={require("../assets/uhg-logo.png")}
                style={styles.logo}
              />
              <Image 
                source={require("../assets/forward-icon.png")}
                style={styles.memberForward}
              />
            </View>
            
            {/* Claims Card */}
            <View style={styles.claimsContainer}>
              <Text style={styles.claimText}> Claims</Text>
              <Text style={styles.claimNum}> 1 </Text>
              <Text style={styles.claimDays}> In Last 60 Days </Text>
              <Image 
              source={require("../assets/forward-icon.png")}
              style={styles.claimForward}/>
            </View>
          </View>
        </View>
      </View> 

      {/* Carousel */}
      <FlatList
      ref={flatListRef}
      data={data}
      renderItem={({item, index}) => {
        return <CarouselItem item={item} index={index} navigation={navigation} setRenderPopUp={setRenderPopUp} setFromCarousel={setFromCarousel}/>;
      }}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onScroll={(event) => handleScroll(event, carouselPage, setCarouselPage)}/>
      <PageIndicator data={data} carouselPage={carouselPage}/>
      <Spotlight />
      <FloatingChatIcon navigation={navigation}/>
    </SafeAreaView>
  );
}


export default Home;
