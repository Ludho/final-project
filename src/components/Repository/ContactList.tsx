import React, { useContext } from 'react'
import Contact from '../../models/contact';
import {StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import ContactCard from './ContactCard';
import { ContactContext } from '../../provider/ContactProvider';

interface Props{
  filter: string
}

const ContactList = (props: Props) => {

const ContactService = useContext(ContactContext).contactService;




const rendContact = (itemData: ListRenderItemInfo<Contact>) => {
    return <ContactCard contact={itemData.item}></ContactCard>
}

  return (
    <View style={styles.container}>
        <FlatList
            data={props.filter==""?ContactService?.contacts:ContactService?.contacts.filter((contact)=>{
              if(`${contact.first_name} ${contact.last_name}`.toLocaleLowerCase().includes(props.filter.toLocaleLowerCase().trim())) return true;
              if(contact.phone.toLocaleLowerCase().includes(props.filter.toLocaleLowerCase())) return true;
              if(contact.email.toLocaleLowerCase().includes(props.filter.toLocaleLowerCase())) return true;
              return false;
            })}
            renderItem={rendContact}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,

    }
  });

export default ContactList