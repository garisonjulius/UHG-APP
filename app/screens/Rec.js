import * as React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
//import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../assets/GlobalStyles";

const ComparisonFrame1 = () => {
  return (
    <View style={[styles.comparisonFrame, styles.comparisonFrameLayout]}>
      <View
        style={[styles.comparisonFrameChild, styles.comparisonFrameLayout]}
      />
      <Text style={styles.monthlyPremiumAnnual}>{`Monthly Premium

Annual Deductible/person (U.S $)

Annual Maximum 
OP (U.S $)

IN Prim Care 
Visit before deductible

ON Prim 
Care Visit 
before Deductible

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
        <Text style={styles.title}>{`Title
`}</Text>
        <Text style={styles.recommended}>(Recommended)</Text>
      </Text>
      <Text style={[styles.titleCurrent, styles.titleTypo]}>
        <Text style={styles.title}>{`Title
`}</Text>
        <Text style={styles.recommended}>(Current)</Text>
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

All plan options >
`}</Text>
        <Text
          style={[styles.contactAnAgent, styles.titleTypo]}
        >{`                                              Contact an agent `}</Text>
        <Text style={[styles.inIn, styles.titleTypo]}>{`*IN = In Network
*ON = Out-Of-Network
*OP = Out-of-pocket`}</Text>
        <Image
          style={styles.phoneCallIcon}
          contentFit="cover"
          source={require("../assets/phone-call.png")}
        />
      </View>
      <Image
        style={styles.alertCircleIcon}
        contentFit="cover"
        source={require("../assets/alert-circle.png")}
      />
      <Image
        style={styles.xIcon}
        contentFit="cover"
        source={require("../assets/x.png")}
      />
      <Text style={[styles.titlerectext, styles.titlerectextTypo]}>{`Lorum



Lorum



Lorum




Lorum




Lorum




Lorum



Lorum`}</Text>
      <Text style={[styles.titlecurrenttext, styles.titlerectextTypo]}>{`Lorum



Lorum



Lorum




Lorum




Lorum




Lorum



Lorum`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  comparisonFrameLayout: {
    position: "absolute",
    height: 998,
    backgroundColor: Color.colorWhite,
  },
  inInFlexBox: { //
    textAlign: "left",
    left: 3,
  },
  rectangleIconLayout: { //
    width: 449,
    position: "absolute",
  },
  lineLayout: {
    height: 631,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 448,
    left: 0,
    position: "absolute",
  },
  featuresTypo: {
    lineHeight: 22,
    textAlign: "center",
    fontSize: FontSize.size_3xl,
  },
  titleTypo: { ////
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: { ////
    height: 251,
    width: 449,
    position: "absolute",
  },
  titlerectextTypo: { ////
    height: 556,
    width: 120,
    left: "55%",
    top: 153,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  comparisonFrameChild: {
    top: -15,
    width: 165,
    left: 283,
    //position: "absolute",
  },
  monthlyPremiumAnnual: {
    top: 148,
    fontSize: 16.5,
    lineHeight: 19,
    color: Color.colorBlack,
    width: 131,
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
  },
  lineIcon: {
    left: 279,
    width: 7,
    //height: 631,
    top: 115,
  },
  comparisonFrameChild1: {
    height: 2,
    top: 746,
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    height: 115,
    top: 0,
    //width: 448,
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
    fontSize: FontSize.size_3xl,
  },
  recommended: {
    fontSize: FontSize.size_md,
  },
  titleRecommended: {
    width: 169,
    textAlign: "center",
    top: 44,
    left: 270,
  },
  titleCurrent: {
    left: 161,
    width: 96,
    height: 44,
    textAlign: "center",
    top: 44,
  },
  groupChild: { ////
    left: 0,
    height: 251,
    top: 0,
  },
  rectangleIcon: {
    left: -1,
    height: 251,
    top: 746,
  },
  basedOnHealthcare: {
    top: 47, //793
    left: 60,
    width: 336,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
  },
  contactAnAgent: {
    top: 228, //964
    left: 57,
    lineHeight: 18,
    width: 365,
    height: 20,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  inIn: {
    top: 5, //751
    fontSize: 9,
    lineHeight: 9,
    textAlign: "left",
    left: 3,
  },
  phoneCallIcon: {
    top: 213, //959
    //left: 411,
    width: 26,
    height: 30,
    //position: "absolute",
    //overflow: "hidden",
  },
  vectorParent: {
    left: -1,
    top: 746,
  },
  alertCircleIcon: {
    top: 88, 
    left: 390,
    width: 19, 
    height: 19,
    //position: "absolute",
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
  titlerectext: {
    marginLeft: 104, ////
  },
  titlecurrenttext: { ////
    marginLeft: -49,
  },
  comparisonFrame: {
    //borderRadius: Border.br_mid,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 998,
    backgroundColor: Color.colorWhite
  },
});

export default ComparisonFrame1;
