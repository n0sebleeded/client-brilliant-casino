import React from 'react';
import blob from "../blobanimation.svg";

const Blob = () => {
    return (
        <div className="blob">
            <img src={blob} alt="blob" style={{
                width: "100%",
            }}></img>
        </div>
    );
};

export default Blob;