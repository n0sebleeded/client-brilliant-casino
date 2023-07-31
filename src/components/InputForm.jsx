import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import { motion } from 'framer-motion';
import EyeOpen from "./icons/EyeOpen";
import EyeClosed from "./icons/EyeClosed";

const InputForm = () => {
    const [value, setValue] = useState({ name: '', pass: '' });
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        console.log(value);
        setValue({ name: '', pass: '' });
    };

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Form
            style={{ scale: '150%' }}
            justify="center"
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({ name: '', pass: '' })}
            onSubmit={handleSubmit}
        >
            <FormField
                name="name"
                htmlFor="text-input-id"
                label="Enter nickname"
                className="form_field"
                justify="center"
                style={{ fontFamily: 'Roboto Mono, monospace' }}
            >
                <Box direction="row" width="100%">
                    <TextInput
                        id="text-input-id"
                        name="name"
                        style={{ fontSize: '10pt', fontWeight: '400', fontFamily: 'Roboto Mono, monospace' }}
                    />
                </Box>
            </FormField>
            <FormField
                name="pass"
                htmlFor="text-input-id"
                label="Enter password"
                className="form_field"
                justify="center"
                style={{ fontFamily: 'Roboto Mono, monospace'}}
            >
                <Box direction="row">
                    <TextInput
                        type={showPassword ? 'text' : 'password'}
                        id="pass-input-id"
                        name="pass"
                        width="100%"
                        style={{ fontSize: '10pt', fontWeight: '400', flexDirection: "row"}}
                    />
                    <Button
                        icon={showPassword ? <EyeClosed /> : <EyeOpen />}
                        onClick={toggleShowPassword}
                    />
                </Box>
            </FormField>
            <Box direction="row" gap="medium" justify="center">
                <motion.button
                    type="submit"
                    className="btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    login
                </motion.button>
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

export default InputForm;
