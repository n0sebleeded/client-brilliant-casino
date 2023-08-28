import React, { useState } from 'react';
import visible from "../../../styles/svgs/visible.svg";
import closed from "../../../styles/svgs/closed.svg";
import { Button, TextInput, Image } from "grommet";

const Eye = ({id, name, style}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <TextInput
                type={showPassword ? 'text' : 'password'}
                id={id}
                name={name}
                width="100%"
                style={style}
            />
            <Button
                icon={showPassword ? <Image src={visible}/> : <Image src={closed} />}
                onClick={toggleShowPassword}
            />
        </>
    );
};

export default Eye;