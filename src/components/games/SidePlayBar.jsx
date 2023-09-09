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
                    <button className="open-button" style={{position: "absolute", left: "8vw", top: "1vh"}} onClick={toggleSideBar}>×</button>
                    <DivMot className="game-btn-block">
                        <button className="open-button" style={{marginTop: "10vh"}}>
                            <img src="https://i.imgur.com/8IsBzIK.png" alt="roullete-ico" className="nav-ico"/>
                            <p className="game-name">roullete</p>
                        </button>
                    </DivMot>
                    <DivMot className="game-btn-block">
                        <button className="open-button">
                            <img src="https://i.imgur.com/ywmDa4W.png" alt="slots-ico" className="nav-ico"/>
                            <p className="game-name">slots</p>
                        </button>
                    </DivMot>
                    <DivMot className="game-btn-block">
                        <button className="open-button">
                            <img src="https://i.imgur.com/LZZ6m23.png" alt="dice-shoot-ico" className="nav-ico"/>
                            <p className="game-name">dice</p>
                        </button>
                    </DivMot>
                </Box>
                <Box background="black" justify="center" align="center">
                    {!isSideBarMenuOpen &&
                        <DivMot>
                            <button className="close-button" onClick={toggleSideBar}>≡</button>
                        </DivMot>
                    }
                    <Outlet />
                </Box>
            </Grid>
        </DivMot>
    );
};

export default SidePlayBar;