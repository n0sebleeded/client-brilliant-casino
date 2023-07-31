import React from 'react';
import { Link } from "react-router-dom";

const StartBtn = () => {
    return (
        <>
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
        </>
    );
};

export default StartBtn;