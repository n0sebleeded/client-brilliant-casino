import React from 'react';
import { Box } from "grommet";
import InputForm from "../reg-log/reg-comp/InputForm";
import CardGroup from "../other/CardGroup";
import DivMot from "../other/DivMot";



const LoginPage = () => {
    return (
        <>
            <Box gridArea="main" background="black" justify="center" align="center">
                <InputForm />
            </Box>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                <DivMot style={{height: "90vh", width: "100%", backgroundColor: "t"}}>
                    <CardGroup preset={'warehouse'} color="#E1CE87"/>
                </DivMot>
                <DivMot>
                    <p className="footer-text" style={{opacity: 0.25}}>Gambling is a form of entertainment, but it can also be addictive. If you feel that your gambling is becoming a problem, or if you know someone who may have a gambling problem, please seek help.</p>
                </DivMot>
            </Box>
        </>
    );
};

export default LoginPage;