import React, { useState } from 'react';
import UserForm from "./UserForm";
import PassForm from "./PassForm";
import {AnimatePresence} from "framer-motion";
import EmailForm from "./EmailForm";
import WelcomePage from "./WelcomePage";
import {Link} from "react-router-dom";

const RegForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (currentStep < 4) {
                setCurrentStep((prevState) => prevState += 1);
            }
        }
    };

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            console.log(formData);
            setFormData({
                username: '',
                email: '',
                password: '',
            });
            setCurrentStep(4);
        }
        // Здесь можно добавить логику отправки данных на сервер или их обработки
    };


    return (
        <>
            <div>
                {currentStep === 1 &&
                    <Link to="/log" className="back-arrow">←</Link>
                }
                {currentStep > 1 &&
                    <p className="back-arrow" onClick={() => {
                        setCurrentStep((prevState) => prevState -= 1);
                    }}>←</p>
                }
            </div>
            <AnimatePresence>
                {currentStep === 1 &&
                    <UserForm
                        value={formData.username}
                        onChange={handleChange}
                        onKeyPress={handleEnterKeyPress}
                        name="username"
                    />
                }
            </AnimatePresence>
            <AnimatePresence>
                {currentStep === 2 &&
                    <PassForm
                        value={formData.password}
                        onChange={handleChange}
                        onKeyPress={handleEnterKeyPress}
                        name="password"
                    />
                }
            </AnimatePresence>
            <AnimatePresence>
                {currentStep === 3 &&
                    <EmailForm
                        value={formData.email}
                        onChange={handleChange}
                        onKeyPress={handleSubmit}
                        name="email"
                    />
                }
            </AnimatePresence>
            <AnimatePresence>
                {currentStep === 4 && <WelcomePage />}
            </AnimatePresence>
        </>
    );
};

export default RegForm;
