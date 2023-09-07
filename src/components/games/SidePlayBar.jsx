import { Box, Grid, } from "grommet";
import '../../styles/App.css';
import React, { useState } from "react";
import {Outlet} from "react-router-dom";
import DivMot from "../pages/other/DivMot.jsx";

const SidePlayBar = () => {

    const [isSideBarMenuOpen, setSideBarMenuState] = useState(false);
    const toggleSideBar = () => {
        setSideBarMenuState((prevState) => !prevState);
    }

    return (
        <DivMot>
            <Grid
                fill
                gap="0"
                rows={["100vh"]}
                columns={[isSideBarMenuOpen ? "10vw" : "0vw", isSideBarMenuOpen ? "90vw" : "100vw"]}
                className={isSideBarMenuOpen ? "sidebar-menu-open" : "sidebar-menu-closed"}
            >
                <Box background="#E1CE87" justify="start" align="start">
                    {/* need be centered!!! */}
                    <button className="open-button" onClick={toggleSideBar}>×</button>
                    <button className="open-button" style={{marginTop: "10vh"}}>
                        <img src="https://i.imgur.com/8IsBzIK.png" alt="roullete-ico" className="nav-ico"/>
                        {/* will be <p> */}
                    </button>
                    <button className="open-button">
                        <img src="https://i.imgur.com/ywmDa4W.png" alt="slots-ico" className="nav-ico"/>
                    </button>
                </Box>
                <Box background="black" justify="center" align="center">
                    {!isSideBarMenuOpen &&
                        <button className="close-button" onClick={toggleSideBar}>≡</button>
                    }
                    <Outlet />
                </Box>
            </Grid>
        </DivMot>
    );
};

export default SidePlayBar;