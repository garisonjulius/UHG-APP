import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

// Basic code structure from: https://reactnative.dev/docs/modal
const PlanNotif = ({ stopRender, displayPopUp, rid, navigation, uid }) => {
    const [recPlanTitle, setRecPlanTitle] = useState(null);
    const [isTextVisible, setTextVisible] = useState(false);

    // Fetch the recommended plan title
    useEffect(() => {
        plan_info_url = `http://10.0.2.2:5000/plan/${rid}`;
        console.log(plan_info_url);
        fetch(plan_info_url)
          .then(response => response.json())
          .then(data => {
            console.log("Fetched recommended plan title:", data['plan_title']);
            setRecPlanTitle(data['plan_title']);
          })
          .catch(err => {
            console.error('Request for recommended plan information failed', err);
          });
    }, []);

    // Function to call when 'Do not show again' is pressed
    const postDisplayData = async () => {
        try {
            // Perform the POST request
            post_url = `http://10.0.2.2:5000/updateDisplay/${uid}`
            const response = await axios.post(post_url, {
                displayPopUp: false
            });
            console.log("Sending post request after user clicked do not show again");
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };


    return (
        <View style={[popUpStyles.centeredView, popUpStyles.allPopUpText]}>
            <Modal
                animationType='slide'
                transparent={false}
                visible={displayPopUp}
                onRequestClose={() => {
                    stopRender();
                }}>
                <View style={[popUpStyles.centeredView, popUpStyles.opacityBackground]}>
                    <View style={popUpStyles.popUpView}>
                        <Pressable
                            onPress={() => setTextVisible(!isTextVisible)} // Toggle text box visibility on press
                            style={popUpStyles.warningContainer}
                        >
                        <Image
                            style={popUpStyles.warningExclamation}
                            contentFit="cover"
                            source={require("../assets/disclaimer.png")}
                        />
                        </Pressable>
                        {isTextVisible && (
                            <View style={popUpStyles.textBox}>
                            <Text style={popUpStyles.text}>Disclaimer: This health care plan recommendation is generated by AI and should not replace professional medical advice. Please consult a healthcare provider for personalized guidance.</Text>
                            </View>
                        )}
                        <View style={popUpStyles.popUpText}>
                            <Text style={[popUpStyles.popUpText, popUpStyles.boldText]}>60 days until open enrollment begins (Nov. 15th){'\n'}</Text>
                            <Text style={popUpStyles.popUpText}>Based on your healthcare data from the past year, we recommend the <Text style={popUpStyles.boldText}>{recPlanTitle}</Text> plan{'\n'}</Text>
                            <Pressable 
                            onPress={() => {
                                // Call stopRender() here so that the popUp is not displayed
                                // once the user comes back to the home page
                                stopRender();
                                navigation.navigate('Menu');
                            }}
                            >
                                <View>
                                    <Text style={popUpStyles.popUpText}>
                                        More information on the <Text style={popUpStyles.boldText}>{recPlanTitle}</Text> plan
                                        <View style={popUpStyles.arrowRight}>
                                            <AntDesign name="arrowright" size={28} color="#02226d"/>
                                        </View>
                                    </Text>
                                </View>
                            </Pressable>
                        </View>

                        {/* Buttons */}
                        <View style={popUpStyles.buttonsView}>
                            {/* Do not show again button */}
                            <Pressable
                                style={popUpStyles.button}
                                onPress={() => {
                                    // Make POST request
                                    postDisplayData();
                                    // Stop rendering the notification. This sets renderPopUp to false in Home.
                                    stopRender();
                            }}
                            >
                                <Text style={[popUpStyles.boldText, popUpStyles.buttonText]}>Do not show again</Text>
                            </Pressable>

                            {/* Remind me later button */}
                            <Pressable
                                style={popUpStyles.button}
                                onPress={() => {
                                    // Stop rendering the notification. This sets renderPopUp to false in Home.
                                    stopRender();
                            }}
                            >
                                <Text style={[popUpStyles.boldText, popUpStyles.buttonText]}>Remind me later</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                
            </Modal>
        </View>
    );
}

const popUpStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacityBackground: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    allPopUpText: {
        color: '#02226d',
    },
    moreInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowRight: {
        paddingLeft: 5,
    },
    popUpView: {
        width: '100%',
        backgroundColor: '#edf8fc',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonsView: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
        marginTop: 15,
    },
    button: {
        borderRadius: 10,
        padding: 10,
    },
    popUpText: {
        fontSize: 18,
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
    buttonText: {
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    warningContainer: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    warningExclamation: {
        width: 20, 
        height: 20,
        position: "absolute",
        backgroundColor: "#edf8fc",
        right: 10,
        top: 2
    },
    textBox: {
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#dee2e6',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
        position: 'absolute',
        top: -150, // Adjust to position text box relative to the image
        right: 10, // Align text box with the image container
      },
      text: {
        fontSize: 14,
        fontWeight: "bold"
      },
});

export default PlanNotif;