import React , { createContext  , useEffect, useReducer } from "react";
import BookReducer from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const booksFromLocalStorege = JSON.parse(localStorage.getItem('books')) ?? [];
    const [ books , dispatch] = useReducer(BookReducer , booksFromLocalStorege);

    useEffect(() => {
      localStorage.setItem('books' , JSON.stringify(books));
    }, [books]);

    return  (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )


}

export default BookContextProvider;