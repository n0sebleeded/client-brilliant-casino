import React from 'react';
import {ResponsiveImage, ResponsiveText} from "./mediaComponent";
import logo from "../logo.svg";
import { Box } from "grommet";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Box gridArea="leftHeader" background="#E1CE87" direction="row" align="center">
                <ResponsiveImage src={logo}></ResponsiveImage>
                <ResponsiveText size="3xl">Brilliant</ResponsiveText>
            </Box>
            <Box gridArea="rightHeader" background="black" direction="row" justify="end" align="center">
                <NavLink to="/reg" className="links">Register / Sign Up</NavLink>
                <NavLink to="/" className="links">Home</NavLink>
                <NavLink to="/about" className="links" style={{marginRight: "10%", marginLeft: "3%"}}>About us</NavLink>
            </Box>
            <>
                <Outlet />
            </>
        </>
    );
};

export default Header;