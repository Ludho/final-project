import React, { useContext, useState } from 'react'
import Contact from '../../models/contact'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ContactContext } from '../../provider/ContactProvider';
import ContactModal from '../modals/ContactModal';


interface Props {
    contact: Contact,
}

const ContactCard = (props:Props) => {

  const [show, setShow] = useState(false)
  const ContactService = useContext(ContactContext).contactService;


  return (
    <>
    <ContactModal show={show} setShow={setShow} contact={props.contact}></ContactModal>
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={styles.title}>{`${props.contact.first_name} ${props.contact.last_name}`}</Text>
            <View style={styles.iconContainer}>
            <Ionicons 
                style={styles.icon} 
                size={20} 
                name='trash'
                onPress={()=>{ContactService?.removeContact(props.contact.id)}}    
            ></Ionicons>
            <MaterialIcons 
                style={styles.icon} 
                size={20} 
                name='mode-edit'
                onPress={()=>{setShow(true)}}    
            ></MaterialIcons>
            
            </View>
        </View>
        <Text style={styles.reference}>{props.contact.email}</Text>
        <Text style={styles.reference}>{props.contact.phone}</Text>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
    card: {
      margin: 10,
      padding: 20,
      paddingTop: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 5,
      overflow: 'hidden',
    },
    title: {
      width: '70%',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      overflow: 'hidden',
    },
    reference: {
      fontSize: 14,
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',

    },
    iconContainer:{
        display: 'flex',
        flexDirection: 'row',
        padding: 10
        
    },
    icon: {
        paddingLeft: 10
    }
  });

export default ContactCard