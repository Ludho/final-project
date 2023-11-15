import { useReducer } from "react";
import { Alert } from "react-native";
import Contact from "../models/contact";

// reducers.js
type contactAction = "ADD_CONTACT"|"EDIT_CONTACT"|"DELETE_CONTACT"


const contactsReducer = (
    contacts: Contact[], 
    action: {type:contactAction} & Partial<Contact>)=>{
  switch (action.type) {
    case "ADD_CONTACT":
        return [...contacts, { 
          first_name: action.first_name,
          last_name: action.last_name,
          email: action.email,
          phone: action.phone,
          id: contacts.length + 1 }];
    case "EDIT_CONTACT":
        return contacts.map((contact) => {
            if (contact.id === action.id) {
              return { ...contact, ...action};
            } else {
              return contact;
            }
          });
    case "DELETE_CONTACT":
        return contacts.filter((item) => item.id !== action.id);
  }
}

const useContact = (initialState: Contact[]) => {
    const [contacts, dispatch] = useReducer(
      contactsReducer,
      initialState,
      () => initialState
    );


    const addContact = (contact: Partial<Contact>) => {
      if (!contact.first_name) Alert.alert("Enter a first name", "");
      if (!contact.last_name) Alert.alert("Enter a last name", "");
      if (!contact.email) Alert.alert("Enter a mail", "");
      if (!contact.phone) Alert.alert("Enter a phone", "");

      dispatch({
        type: "ADD_CONTACT",
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        phone: contact.phone,
      });
    }
  
    const removeContact = (id: Contact["id"]) => {
      if (!contacts.find((item: Contact) => item.id === id)) {
        Alert.alert("ce contact n'existe pas");
        return;
      }
      dispatch({
        type: "DELETE_CONTACT",
        id:id,
      });
    }

    const editContact = (contact :Partial<Contact>) => {
      dispatch({
        type: "EDIT_CONTACT",
        ...contact
      });
    }

    
  
    return {
      addContact,
      removeContact,
      editContact,
      contacts,
    };
  }

  export default useContact;
  