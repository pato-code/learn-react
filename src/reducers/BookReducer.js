import { v1 as uuid} from 'uuid';
import { ADD_BOOK , REMOVE_BOOK } from '../actions/BookActions';
const BookReducer = (books, action) => {
    switch (action.type){
        case ADD_BOOK:
            return addBook(action.title , action.author , books);
        case REMOVE_BOOK:
            return removeBook(action.id , books);
        default:
            return books;
        
    }
}

const addBook = (title, author , books) => {
    return books = [...books , {
        title: title,
        author: author,
        id: uuid()
    }];

}

const removeBook = (id , books) => {

    return books = books.filter( book => book.id !== id );
}

export default BookReducer;