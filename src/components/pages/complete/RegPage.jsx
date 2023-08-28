import React from 'react';
import RegForm from "../reg-log/reg-comp/RegForm";

const RegPage = () => {
    return (
        <div className="reg-page" id="vanta">
            <div style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                <RegForm />
            </div>
        </div>
    );
};

export default RegPage;