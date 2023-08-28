import React from 'react';
import { ResponsiveImage, ResponsiveLink } from "../mediaComponent";
import logo from "../../../logo.svg";
import { Box } from "grommet";
import { NavLink, Outlet } from "react-router-dom";
import GridStyled from "./GridStyled";

const Header = () => {
    return (
        <GridStyled>
            <Box gridArea="leftHeader" background="#E1CE87" direction="row" align="center">
                <ResponsiveImage
                    src={logo}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
                <ResponsiveLink
                    to="/"
                    size="3xl"
                    style={{fontFamily: 'Peachi-bold, serif', fontWeight: '600', textDecoration: 'none'}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Brilliant
                </ResponsiveLink>
            </Box>
            <Box gridArea="rightHeader" background="black" direction="row" justify="end" align="center">
                <NavLink
                    to="/log"
                    className="links"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Sign in
                </NavLink>

                <NavLink
                    to="/"
                    className="links"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="links"
                    style={{marginRight: "15%", marginLeft: "1%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    About us
                </NavLink>
            </Box>
            <>
                <Outlet />
            </>
        </GridStyled>
    );
};

export default Header;