import React, { useContext } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, ListRenderItemInfo} from 'react-native';
import BookOrder from '../models/bookOrder';
import { FlatList } from 'react-native-gesture-handler';
import { OrderContext } from '../provider/OrderProvider';


const OrderDetail: React.FC<StackScreenProps<StackOrderParamList, 'OrderDetail'>>= (
    {
      route: {
        params: {id}
      }
    }) => {
    const OrderService = useContext(OrderContext).orderService;

    const order = OrderService?.orders.find((order)=>{
        return order.id==id
    });
        
    return (
      <View>
        <View  style={{padding: 20}}>
        <Text style={{fontWeight:'bold', fontSize:22}}>Commande n°{id.toString()}</Text>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            />
        </View>
        <View style={{padding: 20}}>
            {FormatBooksList(order?.books).map((_order)=>{
                return <View style={{paddingBottom:20}}>
                <Text style={{fontWeight:'bold', fontSize:22}}>{_order.title}</Text>
                {_order.contact.map((e=>{
                    return <View>
                          <Text style={{ fontSize: 20, color:"gray" }}>{`\u2022 ${e.repo} x${e.quantity}`}</Text>
                    </View>
                }))}
            </View>
            })}

        </View>
      </View>
    )
    
}

const FormatBooksList = (books?: BookOrder[]): {title: string, contact: Partial<BookOrder>[]}[]=>{
    const bookMap = new Map();
    if(!books) return[];

  books.forEach((book)=>{
    if(bookMap.has(book.book)){
        const repo = bookMap.get(book.book);
        bookMap.set(book.book,[...repo,{quantity: book.quantity, repo: book.repo}]);
    }else{
        bookMap.set(book.book,[{quantity: book.quantity, repo: book.repo}]);
    }
  })

  const bookList:{title: string, contact: Partial<BookOrder>[]}[] = [];

  bookMap.forEach((key,value)=>{
    bookList.push({
        title: value,
        contact: key,
    })
  })
  return bookList;
}

export default OrderDetail