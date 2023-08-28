import React from 'react';
import logo from "../../../styles/svgs/logo.svg";
import {Box, Image} from "grommet";
import {Link, NavLink, Outlet} from "react-router-dom";
import GridStyled from "./GridStyled";

const Header = () => {
    return (
        <GridStyled>
            <Box gridArea="leftHeader" background="#E1CE87" direction="row" align="center">
                <Image className="logo" src={logo}/>
                <Link to="/" className="nav-link">
                    Brilliant
                </Link>
            </Box>
            <Box gridArea="rightHeader" background="black" direction="row" justify="end" align="center">
                <NavLink to="/log" className="links">
                    Sign in
                </NavLink>
                <NavLink to="/" className="links">
                    Home
                </NavLink>
                <NavLink to="/about" className="links" style={{marginRight: "15%", marginLeft: "1%"}}>
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