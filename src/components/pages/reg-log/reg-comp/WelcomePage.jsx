import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const WelcomePage = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {show &&
                <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0}}
                    transition={{ duration: 1 }}
                    className="reg-form"
                >
                    <div className="reg-form">
                        <Link style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "whitesmoke",
                                border: "none",
                                textDecoration: "none",
                                fontSize: "5rem"
                            }}
                            to="/"
                        >
                            Welcome to <br /> Brilliant Casino<img src="https://i.imgur.com/hOgufL3.png" alt="dice" height="180vh"></img>
                        </Link>
                    </div>
                </motion.div>
            }
        </>
    );
};

export default WelcomePage;