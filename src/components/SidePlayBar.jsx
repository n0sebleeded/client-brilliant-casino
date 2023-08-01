import {Box, Grid, Text} from "grommet";
import '../styles/App.css';
import React, { useState } from "react";
import {Outlet} from "react-router-dom";

const SidePlayBar = () => {

    const [isSideBarMenuOpen, setSideBarMenuState] = useState(false);
    const toggleSideBar = () => {
        setSideBarMenuState((prevState) => !prevState);
    }

    return (
        <Grid
                fill
                gap="0"
                rows={["100vh"]}
                columns={[isSideBarMenuOpen ? "10vw" : "4vw", isSideBarMenuOpen ? "90vw" : "96vw"]}
                className={isSideBarMenuOpen ? "sidebar-menu-open" : "sidebar-menu-closed"}
        >
            <Box background="#E1CE87" justify="start" align="center">
                <button className="time-button-play" onClick={toggleSideBar}>≡</button>
                <Text className="time-text-play-vert">FUTURE NAV BAR </Text>
            </Box>
            <Outlet />
        </Grid>
    );
};

export default SidePlayBar;