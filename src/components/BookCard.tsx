import React, { useContext } from 'react'
import Book from '../models/book'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { BookContext } from '../provider/BookProvider';


interface Props {
    book: Book,
    openEditModal: Function,
}

const BookCard = (props:Props) => {

  const BookService = useContext(BookContext).bookService;


  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text numberOfLines={1} style={styles.title}>{props.book.title}</Text>
            <View style={styles.iconContainer}>
            <Ionicons 
                style={styles.icon} 
                size={20} 
                name='trash'
                onPress={()=>{BookService?.removeBook(props.book.id)}}    
            ></Ionicons>
            <MaterialIcons 
                style={styles.icon} 
                size={20} 
                name='mode-edit'
                onPress={()=>{props.openEditModal()}}    
            ></MaterialIcons>
            
            </View>
        </View>
        <Text style={styles.reference}>Ref: {props.book.reference}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      margin: 10,
      padding: 20,
      paddingTop: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 5,
      overflow: 'hidden',
    },
    title: {
      width: '70%',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      overflow: 'hidden',
    },
    reference: {
      fontSize: 14,
      color: 'gray',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',

    },
    iconContainer:{
        display: 'flex',
        flexDirection: 'row',
        padding: 10
        
    },
    icon: {
        paddingLeft: 10
    }
  });

export default BookCard