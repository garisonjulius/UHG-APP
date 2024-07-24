import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Link } from '@react-navigation/native';

const PlanNotif = ({ updateRenderPopUp, displayPopUp, recPlanTitle }) => {
    const [popUpVisible, setPopUpVisible] = useState(displayPopUp);

    return (
        <View style={popUpStyles.centeredView}>
            <Modal
                animationType='slide'
                transparent={false} 
                visible={popUpVisible}
                onRequestClose={() => {
                    console.log('Modal has been closed');
                    setModalVisible(!modalVisible);
                }}>
                <View style={popUpStyles.centeredView}>
                    <View style={popUpStyles.popUpView}>
                        <View style={popUpStyles.popUpText}>
                            <Text style={[popUpStyles.popUpText, popUpStyles.headerText]}>60 days until open enrollment begins (Nov. 15th){'\n'}</Text>
                            <Text style={popUpStyles.popUpText}>Based on your healthcare data from the past year, we recommend the <Text style={popUpStyles.planRecText}>{recPlanTitle}</Text> plan{'\n'}</Text>
                            {/* TODO: Implement correct link below */}
                            <Text style={popUpStyles.popUpText}>
                                More information on the <Text style={popUpStyles.planRecText}>{recPlanTitle}</Text> plan
                            </Text>
                        </View>

                        {/* Buttons */}
                        <View style={popUpStyles.buttonsView}>
                            {/* Do not show again button */}
                            <Pressable
                            style={[popUpStyles.button, popUpStyles.buttonOpen]}
                            onPress={() => {
                                // Make POST request
                                // Prevent rendering of the popup on the Home screen
                                // to avoid shifted components on screen
                                updateRenderPopUp(true);
                                // Toggle whether or not popup info is displayed (NOT rendered)
                                setPopUpVisible(!popUpVisible);
                            }}
                            >
                                <Text>Do not show again</Text>
                            </Pressable>

                            {/* Remind me later button */}
                            <Pressable
                            style={[popUpStyles.button, popUpStyles.buttonOpen]}
                            onPress={() => {
                                // Prevent rendering of the popup on the Home screen
                                // to avoid shifted components on screen
                                updateRenderPopUp(true);
                                // Toggle whether or not popup info is displayed (NOT rendered)
                                setPopUpVisible(!popUpVisible);
                            }}
                            >
                                <Text>Remind me later</Text>
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
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    popUpText: {
        fontSize: 18,
        textAlign: 'center',
    },
    headerText: {
        fontWeight: 'bold',
    },
    planRecText: {
        fontWeight: 'bold',
    },
});

export default PlanNotif;