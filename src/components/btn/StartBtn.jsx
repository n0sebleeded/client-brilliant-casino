import React from 'react';
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const StartBtn = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="btn-play"
        >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="5%">
                    <defs>
                        <filter id="gooey">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                           result="highContrastGraphic"/>
                            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop"/>
                        </filter>
                    </defs>
                </svg>

                <Link to="/play" id="gooey-button">
                    Let's start!
                    <span className="bubbles">
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};

export default StartBtn;
