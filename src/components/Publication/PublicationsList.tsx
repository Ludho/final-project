import React, { useContext } from 'react'
import Book from '../../models/book';
import {StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import BookCard from './BookCard';
import { BookContext } from '../../provider/BookProvider';

interface Props{
  filter: string
}

const PublicationsList = (props: Props) => {

const BookService = useContext(BookContext).bookService;




const rendBook = (itemData: ListRenderItemInfo<Book>) => {
    return <BookCard book={itemData.item}></BookCard>
}

  return (
    <View style={styles.container}>
        <FlatList
            data={props.filter==""?BookService?.books:BookService?.books.filter((book)=>{return book.title.toLocaleLowerCase().includes(props.filter.toLocaleLowerCase().trim())})}
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
        paddingBottom: 100,

    }
  });

export default PublicationsList