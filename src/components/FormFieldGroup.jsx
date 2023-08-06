import React from 'react';
import { Box, FormField, TextInput } from "grommet";
import Eye from "./Eye";

const FormFieldGroup = ({name, id, label, style, pass}) => {
    return (
        <>
            <FormField
                name={name}
                htmlFor="text-input-id"
                label={label}
                style={style}
            >
                <Box direction="row" width="100%">
                    {pass ? <Eye id={id} name={name} /> : <TextInput id={id} name={name}/>}
                </Box>
            </FormField>
        </>
    );
};

export default FormFieldGroup;