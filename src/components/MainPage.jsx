import React from 'react';
import { FooterText, MainText } from "./mediaComponent";
import { Box } from "grommet";
import CardGroup from "./CardGroup";
const MainPage = () => {
    return (
        <>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                <MainText color="#8d7a2f" style={{margin: "0 15%"}}>Pet project dedicated to creating a service for playing in a gambling games implemented on</MainText>
                <MainText color="black" style={{margin: "0 15%"}}>ASP.NET & REACTJS</MainText>
            </Box>
            <Box gridArea="main" background="black" justify="end" align="center">
                <CardGroup />
                <FooterText style={{opacity: "30%", margin: "0 5%", textAlign: "center"}}>Gambling is a form of entertainment, but it can also be addictive. If you feel that your gambling is becoming a problem, or if you know someone who may have a gambling problem, please seek help. </FooterText>
            </Box>
        </>
    );
};

export default MainPage;