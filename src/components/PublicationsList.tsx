import React, { useContext } from 'react'
import Book from '../models/book';
import {StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import BookCard from './BookCard';
import { BookContext } from '../provider/BookProvider';

const PublicationsList = () => {

const BookService = useContext(BookContext).bookService;


const rendBook = (itemData: ListRenderItemInfo<Book>) => {
    return <BookCard book={itemData.item}></BookCard>
}

  return (
    <View style={styles.container}>
        <FlatList
            data={BookService?.books}
            renderItem={rendBook}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',

    }
  });

export default PublicationsList