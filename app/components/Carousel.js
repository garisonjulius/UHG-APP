import React, { useState, useEffect} from "react";
import { Text,TouchableOpacity,View, Dimensions, Image, Pressable, BackHandler } from "react-native";
import styles from '../styles'
import Rec from "../screens/Rec";
import PlanNotif from "./PlanNotif";

const {width} = Dimensions.get('window');

export const data = [
  { title: "My Plan Overview", subtitle1: 'Plan ID', subtitle2: 'Coverage' },
  { title: "Spending", subtitle1: 'Family Plan Spending'},
  { title: "Cost Estimates"}
];


export const CarouselItem = ({ item, index, navigation, setRenderPopUp, setFromCarousel}) => {
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
      subtitleStyle1 = styles.familyPlanText;
    }

  return (
    <View style={[styles.carousel, {width}, {marginTop: 0}]}>
      <TouchableOpacity style={styles.dashboardContainer2}>
        <Text style={titleStyle}>{item.title}</Text>
        <Pressable
            onPress={() => 
              {
                setRenderPopUp(true);
                setFromCarousel(true);
            }
          }
            style={styles.circle}
        >
          <Text style={styles.exclamMark}> ! </Text>
        </Pressable>
        <View style={styles.contentContainer}>
            {item.title === "My Plan Overview" && (
            <>
            <Image 
            source={require("../assets/forward-icon.png")}
            style={styles.overviewArrow}/>
               <View style={styles.planidContainer}>
               <Text style={subtitleStyle1}>{item.subtitle1} *</Text>
               <Text style={styles.myplanText}>#003126875</Text>
               </View>
               <Text style={{fontWeight: "bold", right: "35%", top: "60%", fontSize: 10,}}> *Do Not Share this ID</Text>
               <View style={styles.coverageContainer}>
               <Text style={subtitleStyle2}>{item.subtitle2} </Text>
               <Text style={styles.myplanText}> Dental </Text>
               <Text style={styles.myplanText}> Vision </Text>
               <Text style={styles.myplanText}> Medical </Text>
               </View>
            </>
          )}
            {item.title === "Spending" && (
            <> 
            <Image 
            source={require("../assets/forward-icon.png")}
            style={styles.spendingArrow}/>
              <Text style={subtitleStyle1}>{item.subtitle1} </Text>
              <Text style={styles.networkText}>Medical In-Network</Text>
              <Image 
                source={require("../assets/forward-icon.png")}
                style={styles.spendingForward}/>

              <Text style={styles.deductibleText}>Deductible</Text>

              <View style={styles.remainingContainer}>
              <Text style={styles.numberText}> $2000 </Text>
              <Text style={styles.remainingText}>Remaining</Text>
              </View>
              <Image 
              source={require("../assets/deductible.png")}
              style={styles.deductibleBar}/>

              <Text style={styles.pocketText}>Out-of-Pocket Max</Text>
              <View style={styles.remainingContainer2}>
                <Text style={styles.numberText2}> $10,000 </Text>
                <Text style={styles.remainingText2}>Remaining</Text>
              </View>
               <Image 
              source={require("../assets/out-of-pocket.png")}
              style={styles.pocketBar}/>

            </>
          )}
            {item.title === "Cost Estimates" && (
            <>
            <Image 
            source={require("../assets/forward-icon.png")}
            style={styles.costArrow}/>
              <View style={styles.costContainer1}>
              <Text style={styles.costText}> X-Ray </Text>
              <Text style={styles.costNumbers}>$0</Text>
              <Text style={styles.costText}> Teeth Clean </Text>
              <Text style={styles.costNumbers}>$20</Text>
              </View>

              <View style={styles.costContainer2}>
              <Text style={styles.additionalCostText}> Routine Check</Text>
              <Text style={styles.costNumbers2}>$10</Text>
              <Text style={styles.additionalCostText}> Vision Test</Text>
              <Text style={styles.costNumbers2}>$5</Text>
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
    );
  };

export const handleScroll = (event,carouselPage, setCarouselPage) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(contentOffsetX / width);
    setCarouselPage(index);
};

export const PageIndicator = ({ data, carouselPage}) => (
    <View style={styles.pageIndicator}>
        {data.map((item, index) => (
        <View 
        key={index}
        style={[styles.pageIndicatorBead, index === carouselPage && styles.activePageIndicatorBead]}/>
        ))}
     </View>
);

export const useCarouselEffect = (carouselPage, setCarouselPage, data, flatListRef, intervalRef) => {
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const newIndex = (carouselPage + 1) % data.length;
            flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
            setCarouselPage(newIndex);
        }, 5000);
      
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [carouselPage]);
};