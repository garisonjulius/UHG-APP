import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const PlanNotif = ({ displayPopUp }) => {
    const [popUpVisible, setPopUpVisible] = useState(displayPopUp);

    return (
        <Modal
          animationType='slide'
          transparent={true} 
          visible={popUpVisible}
          onRequestClose={() => {
            console.log('Modal has been closed');
            setModalVisible(!modalVisible);
          }}>
        </Modal>
    );
}

const style = StyleSheet.create({
    
});

export default PlanNotif;