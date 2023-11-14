import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable, Alert, TextInput } from "react-native";
import CustomTextInput from "../components/TextInput";

interface Props{
    show: boolean,
    setShow: Function,
}

const BookModal = (props:Props) => {

    const [title,setTitle]= useState('');
    const [reference,setReference]= useState('');

    const closeForm=()=>{
        setTitle('');
        setReference('');
        props.setShow(false)
    }
    
  return (
    
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.setShow(!props.show);
      }}
    >
      <Pressable style={styles.background} onPress={()=>{closeForm()}}>
      </Pressable>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomTextInput 
                      label='Titre'
                      placeholder="ex: Vaincre le stress"
                      value={title}
                      onChangeText={setTitle}
                      />
          <CustomTextInput 
                label="Référence"
                placeholder="ex: lvs-F" 
                value={reference} 
                onChangeText={setReference}/>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => closeForm()}
          >
            <Text style={styles.textStyle}>Enregistrer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    background:{
        position: 'absolute',
        width :'100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
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
    button: {
      borderRadius: 10,
      marginTop: 30,
      padding: 10,
      width: 200,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#039FE1',
    },
    buttonClose: {
      backgroundColor: '#039FE1',
    },
    textStyle: {
      color: 'white',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default BookModal;