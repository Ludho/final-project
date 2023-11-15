import React, { useContext } from "react";
import Order from "../../models/order";
import {
  StyleSheet,
  View,
  Text,
  ListRenderItemInfo,
  FlatList,
  Pressable,
} from "react-native";
import OrderRow from "./OrderRow";
import BookOrder from "../../models/bookOrder";
import { Feather } from "@expo/vector-icons";
import StatusIcon from "../StatusIcon";
import DateFormat from "../DateFormat";
import { OrderContext } from "../../provider/OrderProvider";
import { Status } from "../../models/status";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  order: Order;
  navigation: StackNavigationProp<StackOrderParamList, "OrderStack", undefined>

}

const OrderCard = (props: Props) => {
  const OrderService = useContext(OrderContext).orderService;

  const rendRow = (itemData: ListRenderItemInfo<{title: string, count: Number}>) => {
    return (
      <OrderRow
        title={itemData.item.title}
        count={itemData.item.count}
      ></OrderRow>
    );
  };

  const goToDetails = (OrderId: Number)  => {
    props.navigation.navigate('OrderDetail', { id: OrderId});
  }

  const sendOrder = () => {
    OrderService?.updateStatus(props.order.id, Status.Envoyée);
  };

  const formatedBookList = FormatBooksList(props.order.books);

  return (
    <Pressable onPress={()=>{goToDetails(props.order.id)}}>
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text numberOfLines={1} style={styles.title}>
          Commande n°{props.order.id.toString()}
        </Text>
        {props.order.status == 0 && (
          <Feather
            onPress={() => {
              sendOrder();
            }}
            name="send"
            size={25}
            style={{ padding: 15, paddingLeft: 25 }}
          ></Feather>
        )}
      </View>
      <FlatList
        data={formatedBookList}
        renderItem={rendRow}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.cardFooter}>
        <StatusIcon status={props.order.status}></StatusIcon>
        <DateFormat
          status={props.order.status}
          date={props.order.date}
        ></DateFormat>
      </View>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 320,
    margin: 10,
    padding: 30,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    paddingBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    overflow: "hidden",
    marginRight: "auto",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
  },
  cardFooter: {
    paddingTop: 20,
    margin: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-around",
  },
});

const FormatBooksList = (books: BookOrder[]): {title: string, count: Number}[]=>{
    const bookMap = new Map();

  books.forEach((book)=>{
    if(bookMap.has(book.book)){
        const count = bookMap.get(book.book);
        bookMap.set(book.book,count+book.quantity);
    }else{
        bookMap.set(book.book,book.quantity);
    }
  })

  const bookList:{title: string, count: Number}[] = [];

  bookMap.forEach((key,value)=>{
    bookList.push({
        title: value,
        count: key,
    })
  })
  return bookList;
}

export default OrderCard;
