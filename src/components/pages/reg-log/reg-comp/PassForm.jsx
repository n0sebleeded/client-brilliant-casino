import React from 'react';
import {motion} from "framer-motion";

const PassForm = ({onKeyPress, value, onChange, name}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="reg-form"
        >
            <p> 2 → And your <b>password</b>*</p>
            <input placeholder='Type your answere here' className="input-reg" onKeyPress={onKeyPress} value={value} onChange={onChange} name={name}/>
        </motion.div>
    );
};

export default PassForm;