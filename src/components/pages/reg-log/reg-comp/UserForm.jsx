import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
const UserForm = ({ onKeyPress, value, onChange, name }) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1200);
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
                    <p> 1 → Let's start with your <b>username</b>*</p>
                    <input
                        placeholder="Type your answer here"
                        className="input-reg"
                        onKeyPress={onKeyPress}
                        value={value}
                        onChange={onChange}
                        name={name}
                    />
                    <div className='condition'>
                            <p>Username must contain:</p>
                            <li>At least 5 characters</li>
                        </div>
                </motion.div>
            }
        </>
    );
};

export default UserForm;
