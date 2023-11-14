import { FC, PropsWithChildren, ReactNode, createContext, useState } from "react";
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
    bookModal?:{
        show:boolean,
        setShow: (show:boolean)=>void
    }
}

export const BookContext = createContext<BookContextProps>({});

const BookProvider :FC<PropsWithChildren>= ({children}) => {
    const bookService = useBook(initialState)
    const [show, setShow] = useState(false)

    const changeShow = (show : boolean): void=>{
        setShow(show);
    } 

    const bookModal= {show: show, setShow: changeShow};
    return (
        <BookContext.Provider value={{bookService, bookModal}}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
