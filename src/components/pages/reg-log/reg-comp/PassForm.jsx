import React, { useEffect, useState } from 'react';
import DivMotReg from "../DivMotReg.jsx";

const PassForm = ({ onKeyPress, value, onChange, name, len, digit }) => {

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
                <DivMotReg className="reg-form">
                    <div className="reg-form">
                        <p> 2 → And your <b>password</b>*</p>
                        <input placeholder='Type your answere here' className="input-reg" onKeyPress={onKeyPress} value={value} onChange={onChange} name={name}/>
                        <div className='condition'>
                            <p>Password must contain:</p>
                            <ul>
                                <li className={ len >= 8 ? "condition-true" : "condition-false" }>At least 8 characters</li>
                                <li className={ digit ? "condition-true" : "condition-false" }>At least 1 digit</li>
                            </ul>
                        </div>
                    </div>
                </DivMotReg>
            }
        </>
    );
};

export default PassForm;