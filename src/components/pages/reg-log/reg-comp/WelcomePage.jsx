import React, {useRef} from 'react';
import {CSSTransition} from "react-transition-group";

const WelcomePage = () => {
    const ref = useRef(null);
    return (
        <CSSTransition
            in={true}
            nodeRef={ref}
            timeout={300}
            classNames="reg-form"
            unmountOnExit
        >
            <div ref={ref} className="reg-form">
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>Welcome to Brilliant Casino<img src="https://i.imgur.com/hOgufL3.png" alt="dice" height="100vh"></img>
                </h1>
            </div>
        </CSSTransition>
    );
};

export default WelcomePage;