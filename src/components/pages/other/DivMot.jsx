import React from 'react';
import { motion } from "framer-motion";

const DivMot = ({children, style}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default DivMot;