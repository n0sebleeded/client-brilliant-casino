import React, {useEffect} from 'react';
import RegForm from "./RegForm";
import FOG from 'vanta/src/vanta.fog';

const RegPage = () => {
    useEffect(() => {
        const netEffect = FOG({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x0,
            midtoneColor: 0xa79490,
            lowlightColor: 0x161616,
            baseColor: 0xffffff,
            blurFactor: 0.74,
            zoom: 0.60
        });

        return () => {
            netEffect.destroy();
        };
    }, []);

    return (
        <div className="reg-page" id="vanta">
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "30%"}}>
                <RegForm />
            </div>
        </div>
    );
};

export default RegPage;