import React from 'react';
import { motion } from "framer-motion";

const DivMot = ({children, style, className}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50}}
            transition={{ duration: 1 }}
            style={style}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default DivMot;