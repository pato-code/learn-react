import { motion } from 'framer-motion';
import React , { useContext} from 'react';
import { BookContext } from '../context/BookContext';

const headerVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.8,
            duration: 0.5
        }
    },
}

const pVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.8,
            duration: 0.5
        }
    },
}


const Navbar =  () => {
    const { books } = useContext(BookContext)
    return (
         <div className="navbar">
             <motion.h1
                variants={headerVariants}
                initial="hidden"
                animate="visible"
             >Ninja Reading List</motion.h1>
             <motion.p
                variants={pVariants}
                initial="hidden"
                animate="visible"
             >Currently you have {books.length} books to geth through...</motion.p>
         </div>
    );
}

export default Navbar;