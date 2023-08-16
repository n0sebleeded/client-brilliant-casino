import React, { useState } from 'react';
import UserForm from "./UserForm";
import PassForm from "./PassForm";
import EmailForm from "./EmailForm";

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
            if (currentStep === 1) {
                setCurrentStep(2);
            } else if (currentStep === 2) {
                setCurrentStep(3);
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
            setCurrentStep(1); // Сбрасываем текущий шаг после отправки формы
        }
        // Здесь можно добавить логику отправки данных на сервер или их обработки
    };

    return (
        <div>
            {currentStep === 1 && (
                <UserForm
                    value={formData.username}
                    onChange={handleChange}
                    onKeyPress={handleEnterKeyPress}
                    name="username"
                />
            )}
            {currentStep === 2 && (
                <PassForm
                    value={formData.password}
                    onChange={handleChange}
                    onKeyPress={handleEnterKeyPress}
                    name="password"
                />
            )}
            {currentStep === 3 && (
                <EmailForm
                    value={formData.email}
                    onChange={handleChange}
                    onKeyPress={handleSubmit}
                    name="email"
                />
            )}
        </div>
    );
};

export default RegForm;
