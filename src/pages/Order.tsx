import React, { useState } from "react";
import {StyleSheet, Text } from "react-native";
import OrderProvider from "../provider/OrderProvider";
import OrderList from "../components/OrderList";
import { AntDesign } from '@expo/vector-icons';
import OrderModal from "../components/modals/OrderModal";

const Order = () => {
  const [show, setShow] = useState(false)
  
  return (
    <OrderProvider>
      <OrderModal show={show} setShow={setShow}></OrderModal>
      <OrderList/>
      <AntDesign
        style={styles.icon}
        name="plussquare"
        color="#039FE1"
        size={50}
        onPress={() => {
          setShow(true);
        }}
      ></AntDesign>
    </OrderProvider>
  );
};

const styles = StyleSheet.create({
  searchbar: {
      borderWidth: 1,
      borderColor: 'black',
      margin: 30,
      backgroundColor: 'white',
      borderRadius: 10
  },
  icon:{
      position:'absolute',
      bottom: 10,
      right: 10,
  }
})

export default Order;
