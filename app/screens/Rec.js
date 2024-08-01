//import * as React from "react";
import React, {useState, useEffect} from "react"
import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../assets/GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";



const ComparisonFrame1 = ({navigation}) => {
  
  const [currPlan, setCurrPlan] = useState("");
  const [recPlan, setRecPlan] = useState("");
  const [userData, setUserData] = useState("");
  const [isTextVisible, setTextVisible] = useState(false);
  useEffect(() => {
    fetch('http://10.0.2.2:5000/user/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      })
      .catch(err => {
        console.log("Invalid Rec Plan Info");
      });
  }, []);

  useEffect(() => {
    if (userData && userData.pid){
      fetch(`http://10.0.2.2:5000/plan/${userData.pid}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setCurrPlan(data);
        })
        .catch(err => {
          console.log("Invalid Plan Info");
        });
      }
  }, [userData]);


  useEffect(() => {
    // Fetch recommended plan data when userData changes
    if (userData && userData.rid) {
      fetch(`http://10.0.2.2:5000/plan/${userData.rid}`)
        .then(response => response.json())
        .then(data => {
          console.log('Recommended Plan:', data);
          setRecPlan(data);
        })
        .catch(err => {
          console.log("Error fetching recommended plan:", err);
        });
    }
  }, [userData]);

  return (
    <View style={[styles.comparisonFrame, styles.comparisonFrameLayout]}>
      <View
        style={[styles.comparisonFrameChild, styles.comparisonFrameLayout]}
      />
      <Text style={styles.monthlyPremiumAnnual}>{
`Monthly 
Premium

Annual Deductible/person (U.S $)

Annual 
Maximum 
OP (U.S $)

IN Prim Care 
Visit before deductible

ON Prim 
Care Visit 
before
Deductible

IN Spec. Care Visit before deductible

HMO/PPO/POS/EPO


`}</Text>
      <View style={styles.comparisonFrameItem} />
      
      <View style={styles.comparisonFrameInner} />
      <View style={[styles.lineView, styles.lineLayout]} />
      <Image
        style={[styles.lineIcon, styles.lineLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.comparisonFrameChild1, styles.rectangleViewPosition]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.features, styles.featuresTypo]}>Features</Text>
      <Text style={[styles.titleRecommended, styles.titleTypo]}>
        <Text style={[styles.title, {lineHeight: 25}]}>{`Recommended`}</Text>
          <Text> {'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 19}]}> {recPlan["monthly_premium"]} </Text> 
          <Text> {'\n'}{'\n'}{'\n'}{'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 7}]}> {recPlan["deductible_per_person"]} </Text>{'\n'}
          <Text> {'\n'}{'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 22}]}> {recPlan["out_of_pocket_max_per_person"]} </Text>{'\n'}
          <Text> {'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 53}]}> {recPlan["network_primary_bd"]} </Text>{'\n'}
          <Text> {'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 54}]}> {recPlan["out_of_network_primary_bd"]} </Text>{'\n'}
          <Text> {'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 53}]}> {recPlan["network_specialty_bd"]} </Text>{'\n'}
          <Text> {'\n'}{'\n'} </Text>
          <Text style={[styles.test, {lineHeight: 18}]}> {recPlan["plan_network_type"]} </Text>{'\n'}
          
      </Text>
      <Text style={[styles.titleCurrent, styles.titleTypo]}>
        <Text style={styles.title}>{`Current
`}</Text>
      </Text>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
        <Text
          style={[styles.basedOnHealthcare, styles.titleTypo]}
        >{`Based on healthcare activity over the past year, we calculated $500 in lost value for the year of 2024. 
        `}</Text>
        
        <Text
          style={[styles.contactAnAgent, styles.titleTypo]}
        >{`All Plan Options >       Contact an Agent `}
        
        </Text>
        <Text style={[styles.inIn, styles.titleTypo]}>{`*IN = In Network
*ON = Out-Of-Network
*OP = Out-of-pocket`}</Text>
        <Image
          style={styles.phoneCallIcon}
          contentFit="cover"
          source={require("../assets/phone-call.png")}
        />
      </View>
      <Pressable
        onPress={() => setTextVisible(!isTextVisible)} // Toggle text box visibility on press
        style={styles.warningContainer}
      >
        <Image
            style={styles.warningExclamation}
            contentFit="cover"
            source={require("../assets/disclaimer.png")}
        />
      </Pressable>
      {isTextVisible && (
                            <View style={styles.textBox}>
                            <Text style={styles.text}>Disclaimer: This health care plan recommendation is generated by AI and should not replace professional medical advice. Please consult a healthcare provider for personalized guidance.</Text>
                            </View>
                        )
      }

        <View > 

          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo, {marginTop: -23}]}> {currPlan["monthly_premium"]} </Text>
          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo]}> {currPlan["deductible_per_person"]} </Text>
          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo]}> {currPlan["out_of_pocket_max_per_person"]} </Text>
          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo, {marginLeft: -56}]}> {currPlan["network_primary_bd"]} </Text>
          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo, {marginTop: 0}]}> {currPlan["out_of_network_primary_bd"]} </Text>
          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo, {marginTop: 0, marginLeft: -50 }]}> {currPlan["network_specialty_bd"]} </Text>
          <Text style={[styles.titlecurrenttext, styles.titlerectextTypo, {marginTop: -20, marginLeft: -90}]}> {currPlan["plan_network_type"]} </Text> 

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
    marginTop: 20,
    paddingTop: -40,
    lineHeight: 10,
  },
  transform: {
    transform: [{translateY: 400}],
  },
  titlerectext: {
    position: "absolute",
    marginLeft: 0,
    textAlign: 'left',
    //fontSize: 10,
  },
  spacing: {
    marginBottom: 20,
  },
  titlerectextTypo: { ////
    height: 556,
    width: 140,
    left: "55%",
    top: 153,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_lgi,
    //position: "absolute",
  },
  titlecurrenttext: { ////
    marginLeft: -40,
    marginBottom: -470,
    marginTop: -15,
    textAlign: 'center',
    //position: "absolute",
  },
  comparisonFrameLayout: {
    //position: "absolute",
    height: 998,
    backgroundColor: Color.colorWhite,
  },
  inInFlexBox: { //
    textAlign: "left",
    left: 3,
    //position: "absolute",
  },
  rectangleIconLayout: { //
    width: 449,
    //position: "absolute",
  },
  lineLayout: {
    height: 631,
    //position: "absolute",
  },
  rectangleViewPosition: {
    width: 448,
    left: 0,
    //position: "absolute",
  },
  featuresTypo: {
    lineHeight: 22,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    Color: Color.colorWhite,
    //position: "absolute",
  },
  titleTypo: { ////
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    //position: "absolute",
  },
  groupChildLayout: { ////
    height: 251,
    width: 449,
    //position: "absolute",
    //zIndex: 10,
  },
  comparisonFrameChild: {
    top: -15,
    width: 165,
    left: 283,
    position: "absolute",
  },
  monthlyPremiumAnnual: {
    top: 130,
    fontSize: 16.5,
    lineHeight: 19,
    color: Color.colorBlack,
    width: 138,
    height: 711,
    //textAlign: "left",
    //fontSize: FontSize.size_lgi,
    left: 3,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    position: "absolute",
  },
  comparisonFrameItem: {
    width: 153,
    left: 130,
    top: 0,
    //position: "absolute",
    //height: 998,
    //backgroundColor: Color.colorWhite,
  },
  comparisonFrameInner: {
    borderTopWidth: 1,
    height: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 115,
    left: 3,
    width: 449,
    //position: "absolute",
  },
  lineView: {
    top: 116,
    borderRightWidth: 1,
    width: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    //height: 631,
    left: 130,
    position: "absolute",
  },
  lineIcon: {
    left: 273,
    width: 7,
    //height: 631,
    top: 115,
    position: "absolute",
  },
  comparisonFrameChild1: {
    height: 2,
    top: 746,
    //position: "absolute",
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    height: 115,
    top: 0,
    //width: 448,
    position: "absolute",
  },
  features: {
    left: 21,
    color: '#ddd',
    textAlign: "center",
    top: 44,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    //lineHeight: 22,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_lg,
    //position: "absolute",
  },
  recommended: {
    fontSize: FontSize.size_md,
    //position: "absolute",
  },
  titleRecommended: {
    width: 150,
    textAlign: "center",
    top: 44,
    left: 270,
    position: "absolute",
  },
  titleCurrent: {
    left: 161,
    width: 96,
    height: 44,
    textAlign: "center",
    top: 44,
    position: "absolute",
  },
  groupChild: { ////
    left: 0,
    height: 251,
    top: -105,
    //position: "absolute",
  },
  rectangleIcon: {
    left: -1,
    height: 251,
    top: 746,
    //position: "absolute",
  },
  basedOnHealthcare: {
    top: -70, //793
    left: 45,
    width: 336,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    position: "absolute",
    
  },
  contactAnAgent: {
    top: 20, //964
    left: 10,
    lineHeight: 18,
    width: 365,
    height: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  inIn: {
    top: -100, //751
    fontSize: 9,
    lineHeight: 9,
    textAlign: "left",
    left: 3,
    position: "absolute",
  },
  phoneCallIcon: {
    top: 15, //959
    left: 360,
    width: 25,
    height: 25,
    position: "absolute",
    //overflow: "hidden",
  },
  vectorParent: {
    left: -1,
    top: 746,
    position: "absolute",
  },
  alertCircleIcon: {
    //top: 88, 
    //left: 390,
    width: 19, 
    height: 19,
    position: "absolute",
    //overflow: "hidden",
  },
  xIcon: {
    top: 8,
    left: 385,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  comparisonFrame: {
    //borderRadius: Border.br_mid,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 998,
    backgroundColor: Color.colorWhite,
    //position: "absolute",
  },
  warningContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  warningExclamation: {
      width: 25, 
      height: 25,
      position: "absolute",
      backgroundColor: "white",
      right: -7,
      top: 108
  },
  textBox: {
    zIndex: 5,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    alignItems: 'center',
    position: 'absolute',
    top: 25, // Adjust to position text box relative to the image
    right: 10, // Align text box with the image container
  },
  text: {
    fontSize: 14,
    fontWeight: "bold"
  },
  
});

export default ComparisonFrame1;
