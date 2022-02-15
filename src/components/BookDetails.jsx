import React , {useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { REMOVE_BOOK } from '../actions/BookActions'
import { motion } from 'framer-motion';

export default function BookDetails( { book} ) {

  const evenVariants = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
            stiffness: 100,
            duration: 0.5,
            damping: 7
        }
    },
    exit: {
      x: '70vw',
      transition: {
          type: 'easyInOut',
          duration: 0.5,
      }
    }
}

const oddVariants = {
  hidden: {
      x: '-100vw',
  },
  visible: {
      x: 0,
      transition: {
          type: 'spring',
          delay: 0.5,
          stiffness: 100,
          duration: 0.5,
          damping: 7
      }
  },
  exit: {
      x: '-70vw',
      transition: {
          type: 'easyInOut',
          duration: 0.5,
      }
  }
}

  const { dispatch } = useContext(BookContext);  

  const remove = () =>{
    dispatch({
      type :REMOVE_BOOK,
      id: book.id
    });
  }
  return (
    
      <motion.li
        variants={(Math.floor(Math.random() * 10) + 1) % 2 === 0 ? evenVariants : oddVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      onClick={remove}>
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
      </motion.li>  
  );
}
