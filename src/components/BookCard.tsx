import React from 'react'
import Book from '../models/book'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';


interface Props {
    book: Book,
}

const BookCard = (props:Props) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{props.book.title}</Text>
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
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      overflow: 'hidden',
    },
    reference: {
      fontSize: 14,
      color: 'gray',
    }
  });

export default BookCard