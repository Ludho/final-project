import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable, Alert } from "react-native";
import CustomTextInput from "../TextInput";
import { OrderContext } from "../../provider/OrderProvider";
import {Status} from "../../models/status";
import BookOrder from "../../models/bookOrder";

interface Props{
    show: boolean,
    setShow: Function,
}

const OrderModal = (props:Props) => {

    const [title,setTitle]= useState('');
    const [repository,setRepository]= useState('');
    const [quantity,setQuantity]= useState(1);
    
    const OrderService = useContext(OrderContext).orderService;

    const closeForm=()=>{
        setTitle('');
        setRepository('');
        props.setShow(false)
    }

    const addOrder=()=>{
        if(OrderService?.orders.filter((order)=>{return order.status==Status["En attente"]}).length==0){
            OrderService?.createOrder();
        }
        const bookOrder: BookOrder={
            book: title,
            repo: repository,
            quantity: quantity
        }
        OrderService?.addBook(bookOrder)
        alert("La commande a été ajoutée");
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
                      label='Publication'
                      placeholder="ex: Blanche neige"
                      value={title}
                      onChangeText={setTitle}
                      />
          <CustomTextInput 
                label="Nom/Prénom"
                placeholder="ex: Bertrand" 
                value={repository} 
                onChangeText={setRepository}/>
            <CustomTextInput 
                label="Quantité"
                placeholder="ex: 5"
                numeric={true}
                value={quantity.toString()} 
                onChangeText={setQuantity}/>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {addOrder()}}
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

export default OrderModal;