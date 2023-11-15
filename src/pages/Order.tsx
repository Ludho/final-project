import React, { useState } from "react";
import {StyleSheet, Text, View } from "react-native";
import OrderProvider from "../provider/OrderProvider";
import OrderList from "../components/Order/OrderList";
import { AntDesign } from '@expo/vector-icons';
import OrderModal from "../components/modals/OrderModal";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<StackOrderParamList, 'OrderStack'>;

const Order = ({navigation}: Props) => {
  const [show, setShow] = useState(false)
  
  return (
    <View style={{height:'100%'}}>
      <OrderModal show={show} setShow={setShow}></OrderModal>
      <OrderList navigation={navigation}/>
      <AntDesign
        style={styles.icon}
        name="plussquare"
        color="#039FE1"
        size={50}
        onPress={() => {
          setShow(true);
        }}
      ></AntDesign>
    </View>
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
