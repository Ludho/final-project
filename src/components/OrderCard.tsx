import React, { useContext } from 'react'
import Order from '../models/order'
import {StyleSheet, View, Text, ListRenderItemInfo, FlatList } from 'react-native'
import OrderRow from './OrderRow'
import BookOrder from '../models/bookOrder'
import {Feather} from '@expo/vector-icons';
import StatusIcon from './StatusIcon'
import DateFormat from './DateFormat'
import { OrderContext } from '../provider/OrderProvider'
import { Status } from '../models/status'

interface Props {
    order: Order,
}

const OrderCard = (props:Props) => {

    const OrderService = useContext(OrderContext).orderService;


    const rendRow = (itemData: ListRenderItemInfo<BookOrder>) => {
        return <OrderRow title={itemData.item.book} count={itemData.item.quantity}></OrderRow>
    }
    
    const sendOrder = ()=>{
        OrderService?.updateStatus(props.order.id,Status.Envoyée);
    }


  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text numberOfLines={1} style={styles.title}>Commande n°{props.order.id.toString()}</Text>
            {props.order.status==0 && <Feather onPress={()=>{sendOrder()}} name='send' size={25} style={{padding:15, paddingLeft:25}}></Feather>}
        </View>
        <FlatList
                data={props.order.books}
                renderItem={rendRow}
                showsVerticalScrollIndicator={false}
        />

        <View style={styles.cardFooter}>
            <StatusIcon status={props.order.status}></StatusIcon>
            <DateFormat status={props.order.status} date={props.order.date}></DateFormat>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      margin: 10,
      padding: 30,
      paddingTop: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 5,
      paddingBottom: 10,

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        overflow: 'hidden',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',

    },
    cardFooter:{
        paddingTop: 20,
        margin:5,
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        alignContent:"space-between"
    }


})

export default OrderCard