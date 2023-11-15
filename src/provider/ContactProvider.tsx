import { FC, PropsWithChildren, ReactNode, createContext, useState } from "react";
import Contact from "../models/contact";
import useContact from "../hooks/useContact";
import { contacts } from "../data/contacts";

const initialState: Array<Contact> = contacts;
interface ContactContextProps {
    contactService?: {
        addContact: (contact: Partial<Contact>) =>void,
        removeContact: (id: Contact["id"]) =>void,
        editContact: (contact :Partial<Contact>) =>void,
        contacts: Contact[],        
    };
}

export const ContactContext = createContext<ContactContextProps>({});

const ContactProvider :FC<PropsWithChildren>= ({children}) => {
    const contactService = useContact(initialState)

    return (
        <ContactContext.Provider value={{contactService}}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;
