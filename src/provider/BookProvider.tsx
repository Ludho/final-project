import { FC, PropsWithChildren, ReactNode, createContext } from "react";
import Book from "../models/book";
import useBook from "../hooks/useBook";
import { books } from "../data/pubs";

const initialState: Array<Book> = books;
interface BookContextProps {
    bookService?: {
        addBook: (book: Partial<Book>) =>void,
        removeBook: (id: Book["id"]) =>void,
        editBook: (book :Partial<Book>) =>void,
        books: Book[],        
    };
}

export const BookContext = createContext<BookContextProps>({});

const BookProvider :FC<PropsWithChildren>= ({children}) => {
    const bookService = useBook(initialState)
    return (
        <BookContext.Provider value={{bookService}}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
