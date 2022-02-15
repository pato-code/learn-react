import { AnimatePresence , motion } from 'framer-motion';
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';



const listVartiants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  }
}



export default function BooksList() {
  const { books } = useContext(BookContext);  
  return books.length  ? (
    <AnimatePresence>
      <motion.div 
        variants={listVartiants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="book-list">
          
          <ul>
          <AnimatePresence>
              {books.map(book => 
                  <BookDetails book={book} key={book.id}/>
              )}
          </AnimatePresence>
          </ul>
          
      </motion.div>
    </AnimatePresence>
  ) : 
  <motion.div 
  variants={listVartiants}
  initial="hidden"
  animate="visible"
  exit="exit"
  className="empty">
      No books to read . Hello free time :) 
  </motion.div>
  ;
}
