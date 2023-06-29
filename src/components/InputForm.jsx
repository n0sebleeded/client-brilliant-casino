import React, {useState} from 'react';
import {Box, Button, Form, FormField, TextInput} from "grommet";

const InputForm = () => {
    const [value, setValue] = useState({name: '', pass: ''});
    const handleSubmit = event => {
        event.preventDefault(); // Prevents default form submission behavior
        console.log(value);
        setValue({name:'', pass: ''});
    };

    return (
        <Form
            style={{scale: "150%"}}
            justify="center"
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({name:'', pass: ''})}
            onSubmit={handleSubmit}
        >
            <FormField name="name" htmlFor="text-input-id" label="Enter nickname" className="form_field" justify="center">
                <TextInput id="text-input-id" name="name" style={{fontSize: "10pt", fontWeight: "400"}}/>
            </FormField>
            <FormField name="pass" htmlFor="text-input-id" label="Enter password" className="form_field" justify="center">
                <TextInput id="pass-input-id" name="pass" style={{fontSize: "10pt", fontWeight: "400"}}/>
            </FormField>
            <Box direction="row" gap="medium" justify="center">
                <button type="submit" className="btn">submit</button>
                <button type="reset" className="btn">reset</button>
            </Box>
        </Form>
    );
}

export default InputForm;