import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

const EmailForm = ({onKeyPress, value, onChange, name}) => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {show &&
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50}}
                    transition={{ duration: 1 }}
                    className="reg-form"
                >
                    <p> 3 → What email address can we reach you at? This is only to get in touch, not to send spam.*</p>
                    <input placeholder='name@example.com' type="email" className="input-reg" onKeyPress={onKeyPress} value={value} onChange={onChange} name={name} />
                </motion.div>
            }
        </>
    );
};

export default EmailForm;