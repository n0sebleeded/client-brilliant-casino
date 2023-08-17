import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

const UserForm = ({ onKeyPress, value, onChange, name }) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={true} // Установите значение true, чтобы включить анимацию при монтировании компонента
            timeout={300} // Длительность анимации в миллисекундах
            classNames="reg-form" // Имя класса для анимации
        >
            <div ref={nodeRef} className="reg-form">
                <p> 1 → Let's start with your <b>username</b>*</p>
                <input
                    placeholder="Type your answer here"
                    className="input-reg"
                    onKeyPress={onKeyPress}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
            </div>
        </CSSTransition>
    );
};

export default UserForm;
