import React , { useState , useContext, useRef } from 'react';
import { BookContext } from '../context/BookContext';
import { ADD_BOOK } from '../actions/BookActions';

export default function BookForm() {
    const { dispatch } = useContext(BookContext);

    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('');
    const titleInput = useRef(null);

    const add = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_BOOK,    
            title: title,
            author: author
        });
        setTitle('');
        setAuthor('');
        titleInput.current.focus();
    }

    return (
        <form className="book-form">
            <input ref={titleInput} className="input" type="text" placeholder="enter title of the book" value={title} onChange={(e => setTitle(e.target.value))}/>
            <input className="input" type="text" placeholder="enter author of the book" value={author} onChange={(e => setAuthor(e.target.value))}/>
            <button className="submit" onClick={add}>Add Book</button>
        </form>
    );
}
