import { useReducer } from "react";
import { Alert } from "react-native";
import Order from "../models/order";

// reducers.js
type orderAction = "ADD_ORDER"|"EDIT_ORDER"|"DELETE_ORDER"


const ordersReducer = (
    orders: Order[], 
    action: {type:orderAction} & Partial<Order>)=>{
  switch (action.type) {
    case "ADD_ORDER":
        return [...orders, { order_id: action.,
          order_date: action.or,
          date: "21/07/2021",
          customer_id: 1,
          book_id: 1,
          book_name: "Werner - Das muss kesseln!!!",
          quantity: 90,
          satus: 2, 
          id: orders.length + 1 }];
    case "EDIT_ORDER":
        return orders.map((order) => {
            if (order.id === action.id) {
              return { ...order, ...action};
            } else {
              return order;
            }
          });
    case "DELETE_ORDER":
        return orders.filter((item) => item.id !== action.id);
  }
}

const useOrder = (initialState: Order[]) => {
    const [orders, dispatch] = useReducer(
      ordersReducer,
      initialState,
      () => initialState
    );


    const addOrder = (order: Order) => {
      if (!order.category) Alert.alert("Enter a category", "");
      if (!order.title) Alert.alert("Enter a title", "");
      if (!order.description) Alert.alert("Enter a description", "");

      dispatch({
        type: "ADD_ORDER",
        title: order.title,
        category: order.category,
        description: order.description
      });
    }
  
    const removeOrder = (id: Order["id"]) => {
      if (!orders.find((item: Order) => item.id === id)) {
        Alert.alert("cette recette n'existe pas");
        return;
      }
      dispatch({
        type: "REMOVE_ORDER",
        id:id,
      });
    }

    const editOrder = (order :Partial<Order>) => {
      dispatch({
        type: "EDIT_ORDER",
        ...order
      });
    }

  
    return {
      addOrder,
      removeOrder,
      editOrder,
      orders,
    };
  }

  export default useOrder;
  