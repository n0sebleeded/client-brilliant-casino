import React from 'react';
import { Box } from "grommet";
import InputForm from "./reg-comp/InputForm";
import CardGroup from "../base/CardGroup";
import { motion } from "framer-motion";
import { FooterText } from "../mediaComponent";



const LoginPage = () => {
    const AnimatedFooterText = motion(FooterText);

    return (
        <>
            <Box gridArea="main" background="black" justify="center" align="center">
                <InputForm />
            </Box>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                <CardGroup preset={'warehouse'} />
                <AnimatedFooterText
                    style={{margin: "0 5%", textAlign: "center", fontFamily: 'Peachi-bold, serif', color:"black"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    Gambling is a form of entertainment, but it can also be addictive. If you feel that your gambling is becoming a problem, or if you know someone who may have a gambling problem, please seek help.
                </AnimatedFooterText>
            </Box>
        </>
    );
};

export default LoginPage;