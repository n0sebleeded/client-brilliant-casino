import React, {useRef} from 'react';
import { CSSTransition } from "react-transition-group";

const ShowError = (props) => {
    const ref = useRef(null)
    const hasError = props.hasError;
        return (
            <CSSTransition
                in={hasError}
                nodeRef={ref}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
                <div className="alert" ref={ref}>
                    Your password must contain:
                    <li>8-16 characters</li>
                    <li>Letters</li>
                    <li>Numbers</li>
                </div>
            </CSSTransition>
        )
};

export default ShowError;