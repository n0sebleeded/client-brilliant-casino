import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <p>
                <h3 className="not-found-text">Page not found</h3>
                <Link to="/" className="not-found-link"> Home </Link>
            </p>
        </div>
    );
};

export default NotFound;