import React from 'react';
import { MainText } from "./mediaComponent";
import { Box } from "grommet";

const AboutBlock = () => {
    return (
        <>
            <Box gridArea="leftmain" background="#E1CE87" justify="center" align="center">
                <MainText color="#8d7a2f" style={{margin: "0 15%"}}>Backend dev.</MainText>
                <MainText color="black" style={{margin: "0 15%"}}>Vitaliy Kuksa</MainText>
            </Box>
            <Box gridArea="main" background="black" justify="center" align="center">
                <MainText color="#353535" style={{margin: "0 15%"}}>Frontend dev.</MainText>
                <MainText color="white" style={{margin: "0 15%"}}>Danil Akhunzianov</MainText>
            </Box>
        </>
    );
};

export default AboutBlock;