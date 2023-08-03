import React from 'react';
import blob from '../blobanimation.svg'
import {Image} from "grommet";

const RegPage = () => {
    return (
        <div style={{
            backgroundColor: "black",
            height: "100vh",
            width: "100vw"
        }}>
           <Image src={blob} alt="blob" style={{height: "80%"}}></Image>
        </div>
    );
};

export default RegPage;