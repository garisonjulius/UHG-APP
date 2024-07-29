import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

// Basic code structure from: https://reactnative.dev/docs/modal
const PlanNotif = ({ stopRender, displayPopUp, rid, navigation, uid }) => {
    const [recPlanTitle, setRecPlanTitle] = useState(null);

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
                        <View style={popUpStyles.popUpText}>
                            <Text style={[popUpStyles.popUpText, popUpStyles.boldText]}>60 days until open enrollment begins (Nov. 15th){'\n'}</Text>
                            <Text style={popUpStyles.popUpText}>Based on your healthcare data from the past year, we recommend the <Text style={popUpStyles.boldText}>{recPlanTitle}</Text> plan{'\n'}</Text>
                            <Pressable onPress={() => {
                                // Call stopRender() here so that the popUp is not displayed
                                // once the user comes back to the home page
                                stopRender();
                                navigation.navigate('Menu');
                            }}>
                                <Text style={popUpStyles.popUpText}>
                                    More information on the <Text style={popUpStyles.boldText}>{recPlanTitle}</Text> plan
                                    <View style={popUpStyles.arrowRight}>
                                        <AntDesign name="arrowright" size={28} color="#02226d"/>
                                    </View>
                                </Text>
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
                                <Text style={[popUpStyles.boldText, popUpStyles.buttonText]}>Test</Text>
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
    arrowRight: {
        paddingLeft: 15,
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
});

export default PlanNotif;