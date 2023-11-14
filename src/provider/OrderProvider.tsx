import { FC, PropsWithChildren, createContext } from "react";
import Order from "../models/order";
import useOrder from "../hooks/useOrder";
import { orders } from "../data/order";
import BookOrder from "../models/bookOrder";
import { Status } from "../models/status";

const initialState: Array<Order> = orders;
interface OrderContextProps {
    orderService?: {
        createOrder: () =>void,
        addBook: (bookOrder :BookOrder) =>void,
        updateStatus: (id: Order["id"], status: Order["status"]) =>void,
        orders: Order[],        
    };
}

export const OrderContext = createContext<OrderContextProps>({});

const OrderProvider :FC<PropsWithChildren>= ({children}) => {
    const orderService = useOrder(initialState.sort((order)=>{if(order.status==Status['En attente']){return -1}else return 1}))

    return (
        <OrderContext.Provider value={{orderService}}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;
