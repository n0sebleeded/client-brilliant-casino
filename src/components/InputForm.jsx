import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput, Image } from 'grommet';
import { motion } from 'framer-motion';
import visible from '../visible.svg';
import closed from '../closed.svg';
import ShowError from "./ShowError";

const InputForm = () => {
    const regularExpressionPass = /^(?=.*[0-9])[a-zA-Z0-9]{8,16}$/;
    const regularExpressionName = /^(?=.*[0-9])[a-z]{6,16}$/;
    const [value, setValue] = useState({ name: '', pass: '' });
    const [errorMessage, setErrorMessage] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        console.log(value);
        if (!regularExpressionPass.test(value.pass)) {
            setErrorMessage(true);
        } else {
            setErrorMessage(false);
        }
        setValue({ name: '', pass: '' });
    };

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <ShowError hasError={errorMessage}/>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5 }}
            >
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
                        style={{ fontFamily: 'Peachi-bold, serif' }}
                    >
                        <Box direction="row" width="100%">
                            <TextInput
                                id="text-input-id"
                                name="name"
                                style={{ fontSize: '10pt', fontWeight: '400', fontFamily: 'Peachi-bold, serif' }}
                            />
                        </Box>
                    </FormField>
                    <FormField
                        name="pass"
                        htmlFor="text-input-id"
                        label="Enter password"
                        className="form_field"
                        justify="center"
                        style={{ fontFamily: 'Peachi-bold, serif'}}
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
                                icon={showPassword ? <Image src={visible}/> : <Image src={closed} />}
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
            </motion.div>
        </>
    )
};

export default InputForm;
