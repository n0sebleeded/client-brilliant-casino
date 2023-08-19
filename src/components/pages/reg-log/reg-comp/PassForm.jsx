import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const PassForm = ({onKeyPress, value, onChange, name}) => {

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
                    <div className="reg-form">
                        <p> 2 → And your <b>password</b>*</p>
                        <input placeholder='Type your answere here' className="input-reg" onKeyPress={onKeyPress} value={value} onChange={onChange} name={name}/>
                    </div>
                </motion.div>
            }
        </>
    );
};

export default PassForm;