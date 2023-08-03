import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <p>
                <p className="not-found-text">Page not found</p>
                <Link to="/" className="not-found-link"> Home </Link>
            </p>
        </div>
    );
};

export default NotFound;