import React, { useEffect, useState } from 'react';
import DivMotReg from "../DivMotReg.jsx";
const UserForm = ({ onKeyPress, value, onChange, name, len }) => {

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
                <DivMotReg className="reg-form">
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
                        <ul>
                            <li className={len >= 5 ? "condition-true" : "condition-false"}>At least 5 characters</li>
                        </ul>
                    </div>
                </DivMotReg>
            }
        </>
    );
};

export default UserForm;
