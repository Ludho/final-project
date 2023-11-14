import { useReducer } from "react";
import Order from "../models/order";
import BookOrder from "../models/bookOrder";
import { Status } from "../models/status";

// reducers.js
type orderAction = "CREATE_ORDER"|"ADD_BOOK"|"EDIT_TIME_ORDER"|"EDIT_STATUS_ORDER"


const ordersReducer = (
    orders: Order[], 
    action: {type:orderAction} & Partial<Order> & {bookOrder: BookOrder})=>{
  switch (action.type) {
    case "CREATE_ORDER":
        return [...orders, { 
          date: (new Date).toLocaleDateString("en-GB"),
          status: 0,
          books:[],
          id: orders.length + 1 }].sort((order)=>{if(order.status==Status['En attente']){return -1}else return 1});
    case "EDIT_STATUS_ORDER":
        return orders.map((order) => {
            if (order.id === action.id) {
              return { ...order, status: action.status, date: (new Date).toLocaleDateString("en-GB")};
            } else {
              return order;
            }
          });
    case "ADD_BOOK":
        return orders.map((order) => {
          if (order.status === 0) {
            return { ...order, books: [...order.books,action.bookOrder], date: (new Date).toLocaleDateString("en-GB")};
          } else {
            return order;
          }
        });
  }
}

const useOrder = (initialState: Order[]) => {
    const [orders, dispatch] = useReducer(
      ordersReducer,
      initialState,
      () => initialState
    );


    const createOrder = () => {
      dispatch({
        type: "CREATE_ORDER",
      });
    }

    const updateOrderTime = (id: Number) => {
      dispatch({
        type: "EDIT_TIME_ORDER",
        id:id,
      });
    }

    const addBook = (bookOrder: BookOrder) => {
      dispatch({
        type: "ADD_BOOK",
        bookOrder:bookOrder,
      });
    }

    const updateStatus = (id: Number, status: Number) => {
      dispatch({
        type: "EDIT_STATUS_ORDER",
        id: id,
        status: status,
      });
    }

    
  
    return {
      createOrder,
      updateOrderTime,
      updateStatus,
      addBook,
      orders,
    };
  }

  export default useOrder;
  