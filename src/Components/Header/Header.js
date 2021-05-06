import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Football Manager</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/">Player Review</a>
            </nav>
        </div>
    );
};

export default Header;