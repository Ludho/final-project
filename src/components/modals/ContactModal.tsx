import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable, Alert, TextInput } from "react-native";
import CustomTextInput from "../TextInput";
import { ContactContext } from "../../provider/ContactProvider";
import Contact from "../../models/contact";

interface Props{
    show: boolean,
    setShow: Function,
    contact?: Contact
}

const ContactModal = (props:Props) => {

    const [firstName,setFirstName]= useState(props.contact?props.contact.first_name:'');
    const [lastName,setLastName]= useState(props.contact?props.contact.last_name:'');
    const [phone,setPhone]= useState(props.contact?props.contact.phone:'');
    const [mail,setMail]= useState(props.contact?props.contact.email:'');
    const ContactService = useContext(ContactContext).contactService;

    const closeForm=()=>{
        if(!props.contact){
          setFirstName('');
          setLastName('');
          setPhone('');
          setMail('');
        }
        props.setShow(false)
    }

    const createContact=()=>{
        const newContact: Partial<Contact>={
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: mail,
        }
        ContactService?.addContact(newContact)
        alert("Le contact a été ajouté");
        closeForm();
    }

    const updateContact=()=>{
      const updatedContact: Partial<Contact>={
        id: props.contact?.id,
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: mail,
      }
      ContactService?.editContact(updatedContact)
      alert("Le contact a été modifié");
      closeForm();
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
                      label='Nom'
                      placeholder="ex: Jean"
                      value={lastName}
                      onChangeText={setLastName}
                      />
          <CustomTextInput 
                label="Prénom"
                placeholder="ex: Lacasagne" 
                value={firstName} 
                onChangeText={setFirstName}/>
          <CustomTextInput 
                label="Téléphone"
                placeholder="ex: 12345678" 
                value={phone} 
                onChangeText={setPhone}/>
          <CustomTextInput 
                label="Email"
                placeholder="ex: jdoe@gmail.com" 
                value={mail} 
                onChangeText={setMail}/>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {props.contact?updateContact():createContact()}}
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

export default ContactModal;