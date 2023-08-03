import React from 'react';
import blob from '../blobanimation.svg'

const RegPage = () => {
    return (
        <div style={{
            backgroundColor: "black",
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
        }}>
           <img src={blob} alt="blob" style={{
               height: "80%",
           }}></img>
        </div>
    );
};

export default RegPage;