import {Box, Grid, Text} from "grommet";
import '../../styles/App.css';
import React, { useState } from "react";
import {Outlet} from "react-router-dom";
import {motion} from "framer-motion";
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
                columns={[isSideBarMenuOpen ? "10vw" : "4vw", isSideBarMenuOpen ? "90vw" : "96vw"]}
                className={isSideBarMenuOpen ? "sidebar-menu-open" : "sidebar-menu-closed"}
            >
                <Box background="#E1CE87" justify="start" align="center">
                    <button className="button-play" onClick={toggleSideBar}>≡</button>
                    <button className="button-play" style={{marginTop: "10vh"}}>
                        <img src="https://i.imgur.com/8IsBzIK.png" alt="roullete-ico" className="nav-ico"/>
                    </button>
                    <button className="button-play">
                        <img src="https://i.imgur.com/ywmDa4W.png" alt="slots-ico" className="nav-ico"/>
                    </button>
                </Box>
                <Outlet />
            </Grid>
        </DivMot>
    );
};

export default SidePlayBar;