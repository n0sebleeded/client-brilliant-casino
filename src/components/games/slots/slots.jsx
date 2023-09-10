import React, {useState} from 'react';

const Slots = () => {

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
    }

    return (
        <div className="slots-container">
            <div className="slots-container-item">
                {slotState.map((el, ind) => (
                    <div key={ind} className="slots-item">{el.value}</div>
                ))}
            </div>
            <button onClick={handleSlot} className="roll-btn">roll</button>
        </div>
    );
};

export default Slots;