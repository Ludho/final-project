import React, { useContext } from 'react'
import Order from '../models/order';
import {StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import OrderCard from './OrderCard';
import { OrderContext } from '../provider/OrderProvider';
import { Status } from '../models/status';

const OrderList = () => {
    const OrderService = useContext(OrderContext).orderService;




    const rendOrder = (itemData: ListRenderItemInfo<Order>) => {
        return <OrderCard order={itemData.item}></OrderCard>
    }
    
      return (
        <View style={styles.container}>
            <FlatList
                data={OrderService?.orders}
                renderItem={rendOrder}
                showsVerticalScrollIndicator={false}
            />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        alignItems: 'center',
    }
  });

export default OrderList