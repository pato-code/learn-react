import { motion } from 'framer-motion';
import BookForm from './components/BookForm';
import BooksList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';

const variants = {
  hidden: {
    opacity: 0.3,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 1.2  , type: 'easeInOut'},
      y: { duration: 2.2 , type: 'spring',
      stiffness: 150 },
      
    },
  }
};

function App() {
  return (
    <motion.div 
      variants={variants}
      initial={variants.hidden}
      animate={variants.visible}
    className="App">
      <BookContextProvider>
        <Navbar />
        <BooksList />
        <BookForm />
      </BookContextProvider>
    </motion.div>
  );
}

export default App;
