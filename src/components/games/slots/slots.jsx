import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";

const Slots = () => {

    const [count, setCount] = useState(0);
    const [slotState, setSlotState] = useState([
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 1
        },
        {
            id: 3,
            value: 1
        }
    ])

    const handleSlot = () => {
        let n = slotState.map((el) => {
            return {
                ...el,
                value: Math.floor(Math.random() * 9 + 1)
            }
        })
        setSlotState(n);
        setCount((prevState) => prevState+ 1);
    }

    return (
        <div className="slots-container">
                <div className="slots-container-item">
                    {/* CSS TRANSITION!!*/}
                        {slotState.map((el, ind) => (
                            <div key={ind} className="slots-item">
                                <p className="slots-el">{el.value}</p>
                            </div>
                        ))}
                </div>
            <button onClick={handleSlot} className="roll-btn">roll</button>
            <p>rolls count {count}</p>
        </div>
    );
};

export default Slots;