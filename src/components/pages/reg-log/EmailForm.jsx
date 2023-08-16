import React from 'react';
import {motion} from "framer-motion";

const EmailForm = ({onKeyPress, value, onChange, name}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="reg-form"
        >
            <p> 3 → What email address can we reach you at? This is only to get in touch, not to send spam.*</p>
            <input placeholder='name@example.com' type="email" className="input-reg" onKeyPress={onKeyPress} value={value} onChange={onChange} name={name} />
        </motion.div>
    );
};

export default EmailForm;