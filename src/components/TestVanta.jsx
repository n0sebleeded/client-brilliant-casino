import React, { useEffect } from 'react';
import NET from 'vanta/src/vanta.net';

const TestVanta = () => {
    useEffect(() => {
        const netEffect = NET({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            scale: 1.00,
            scaleMobile: 1.00,
            spacing: 17.00,
            points: 15.00
        });

        return () => {
            netEffect.destroy();
        };
    }, []);

    return (
        <div>
            <div className="background" id="vanta"></div>
        </div>
    );
};

export default TestVanta;
