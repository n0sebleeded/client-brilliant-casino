import React from 'react';
import Blob from './Blob';
import RegForm from "./RegForm";

const RegPage = () => {
    return (
        <div className="reg-page">
            <Blob />
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "30%"}}>
                <RegForm />
            </div>
        </div>
    );
};

export default RegPage;