import { useReducer } from "react";
import { Alert } from "react-native";
import Book from "../models/book";

// reducers.js
type bookAction = "ADD_BOOK"|"EDIT_BOOK"|"DELETE_BOOK"


const booksReducer = (
    books: Book[], 
    action: {type:bookAction} & Partial<Book>)=>{
  switch (action.type) {
    case "ADD_BOOK":
        return [...books, { 
          title: action.title,
          reference: action.reference,
          id: books.length + 1 }];
    case "EDIT_BOOK":
        return books.map((book) => {
            if (book.id === action.id) {
              return { ...book, ...action};
            } else {
              return book;
            }
          });
    case "DELETE_BOOK":
        return books.filter((item) => item.id !== action.id);
  }
}

const useBook = (initialState: Book[]) => {
    const [books, dispatch] = useReducer(
      booksReducer,
      initialState,
      () => initialState
    );


    const addBook = (book: Partial<Book>) => {
      if (!book.reference) Alert.alert("Enter a reference", "");
      if (!book.title) Alert.alert("Enter a title", "");

      dispatch({
        type: "ADD_BOOK",
        title: book.title,
        reference: book.reference,
      });
    }
  
    const removeBook = (id: Book["id"]) => {
      if (!books.find((item: Book) => item.id === id)) {
        Alert.alert("ce livre n'existe pas");
        return;
      }
      dispatch({
        type: "DELETE_BOOK",
        id:id,
      });
    }

    const editBook = (book :Partial<Book>) => {
      dispatch({
        type: "EDIT_BOOK",
        ...book
      });
    }

    
  
    return {
      addBook,
      removeBook,
      editBook,
      books,
    };
  }

  export default useBook;
  