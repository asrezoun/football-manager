import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Football Manager</h1>
            <nav>
                <a href="/Home">Home</a>
                <a href="/review">Player Review</a>
            </nav>
        </div>
    );
};

export default Header;