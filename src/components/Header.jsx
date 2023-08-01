import React from 'react';
import { ResponsiveImage, ResponsiveText } from "./mediaComponent";
import logo from "../logo.svg";
import { Box } from "grommet";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import GridStyled from "./GridStyled";

const Header = () => {
    const AnimatedRespText = motion(ResponsiveText);
    const AnimatedRespImg = motion(ResponsiveImage);
    const AnimatedNavLinks = motion(NavLink);

    return (
        <GridStyled>
            <Box gridArea="leftHeader" background="#E1CE87" direction="row" align="center">
                <AnimatedRespImg
                    src={logo}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                />
                <AnimatedRespText
                    size="3xl"
                    style={{fontFamily: 'Peachi-bold, serif', fontWeight: '600'}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    Brilliant
                </AnimatedRespText>
            </Box>
            <Box gridArea="rightHeader" background="black" direction="row" justify="end" align="center">
                <AnimatedNavLinks
                    to="/log"
                    className="links"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    Sign in
                </AnimatedNavLinks>

                <AnimatedNavLinks
                    to="/"
                    className="links"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    Home
                </AnimatedNavLinks>
                <AnimatedNavLinks
                    to="/about"
                    className="links"
                    style={{marginRight: "15%", marginLeft: "1%"}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5 }}
                >
                    About us
                </AnimatedNavLinks>
            </Box>
            <>
                <Outlet />
            </>
        </GridStyled>
    );
};

export default Header;