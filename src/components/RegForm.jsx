import React, { useState } from 'react';
import { Box, Form } from "grommet";
import { motion } from "framer-motion";
import FormFieldGroup from "./FormFieldGroup";

const RegForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно добавить логику отправки данных на сервер или их обработки
        console.log(formData);
        setFormData({
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        })
    };
    return (
        <Form
            style={{ scale: '150%' }}
            justify="center"
            value={formData}
            onChange={(nextValue) => setFormData(nextValue)}
            onReset={() => setFormData({ username: '', password: '', email: ''})}
            onSubmit={handleSubmit}
        >
            <FormFieldGroup
                name="username"
                id="text-input-id"
                label="Enter nickname"
            />
            <FormFieldGroup
                name="email"
                id="email-input-id"
                label="Enter email"
            />
            <FormFieldGroup
                name="password"
                id="pass-input-id"
                label="Enter password"
                pass={true}
            />
            <FormFieldGroup
                name="passwordConfirm"
                id="passConf-input-id"
                label="Confirm password"
                pass={true}
            />
            <Box direction="row" gap="medium" justify="center">
                <motion.button
                    type="submit"
                    className="btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    register
                </motion.button>
            </Box>
        </Form>
    );
};

export default RegForm;