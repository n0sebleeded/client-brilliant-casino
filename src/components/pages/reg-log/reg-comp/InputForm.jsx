import React, { useState } from 'react';
import { Box, Form } from 'grommet';
import { motion } from 'framer-motion';
import ShowError from "../../ShowError";
import { Link } from "react-router-dom";
import FormFieldGroup from "../FormFieldGroup";

const InputForm = () => {

    const [value, setValue] = useState({ name: '', pass: '' });
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        console.log(value);
        setValue({ name: '', pass: '' });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="log-page-font"
            >
                <Form
                    className="login"
                    justify="center"
                    value={value}
                    onChange={(nextValue) => setValue(nextValue)}
                    onReset={() => setValue({ name: '', pass: '' })}
                    onSubmit={handleSubmit}
                >
                    <FormFieldGroup
                        name="name"
                        id="text-input-id"
                        label="Enter nickname"
                    />
                    <FormFieldGroup
                        name="pass"
                        id="pass-input-id"
                        label="Enter password"
                        pass={true}
                    />
                    <Box direction="row" gap="medium" justify="center">
                        <motion.button
                            type="submit"
                            className="btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            login
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="btn"
                        >
                            <Link
                                to = "/reg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                style={{textDecoration: "none", color: "white"}}
                            >
                                register
                            </Link>
                        </motion.button>
                    </Box>
                </Form>
            </motion.div>
        </>
    )
};

export default InputForm;
